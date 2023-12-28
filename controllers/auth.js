//RESTFUL APIs for Authentication and Login

//connect the User model so the controller can use it
const User = require("../models/User");

//install bcrypt to hash the password (npm i bcrypt)
const bcrypt = require('bcrypt');
//how many rounds of hashing (1 to 15)
const salt = 10;

//require jwt (npm i jsonwebtoken)
const jwt = require('jsonwebtoken');

exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);

    let hash = bcrypt.hashSync(req.body.password, salt);
    //console.log(hash);

    user.password = hash;

    user.save()
    .then(() => {
        res.json({ "message": "New User Created Successfully!" });
        // res.redirect("/signin");
    })
    .catch((error) => {
        res.json({ "message": error.message });
    })
}

exports.auth_signin_post = async (req,res) => {

    let { emailAddress, password } = req.body;
    console.log(emailAddress);

    try{
        let user = await User.findOne({emailAddress});
        console.log(user);

        if(!user){
            return res.json({"message": "User does not exist."}).status(400);
        }

        //Password Comparision Check
        const isMatched = await bcrypt.compareSync(password, user.password);
        console.log(password);
        console.log(user.password);

        if(!isMatched){
            return res.json({"message": "Password is wrong"}).status(400);
        }

        //Generate JWT
        const payload = {
            user: {
                id: user._id
            }
        }

        jwt.sign(payload,
            process.env.SECRET, //.env from the B.E.
            {expiresIn: 36000000},
            (err, token) => {
                if(err) throw err;
                res.json({token}).status(200);
            }
        )
    }
    catch(err){
        console.log(err);
        res.json({"message":"Unable to Login!"}).status(400);
    }

}