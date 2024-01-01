const Users = require('../models/User');

const bcrypt = require('bcrypt');
const salt = 10;

exports.user_fetch_post = (req,res) => {
    
Users.findById(req.body.userID)
.then((userDetails) => {
    console.log(userDetails);
    userDetails.password = null;
    // let data = { ...userDetails, password: null } //removing password
    console.log(userDetails);
    res.json({"userDetails": userDetails });
    //res.render("user/index", {users, dayjs, "title":"Show Users List"});
})
.catch((error) => {
    console.log("There was an error: " + error);
    //res.send("Cannot Show All Users. Please try again later.");
})
}

//RESTful API
exports.user_index_get = (req, res) => {
Users.find()
.then((users) => {
    
    res.json({ users }); 
})
.catch((err) => {
    console.log(err);
})

}

// Create Operation
exports.user_create_get = (req, res) => {
res.render("user/add");
}

//Convert to RESTful API
exports.user_create_post = (req, res) => {
console.log(req.body);
let user = new User(req.body);

// Save User
user.save()
.then(( user ) => {
    // res.redirect("/user/index");
    res.json({ user })
})
.catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
})
}

//RESTful API
exports.user_show_get = (req, res) => {
console.log(req.query.id);
Users.findById(req.query.id)
.then((user) => {
    res.render("user/detail", {user, dayjs})
})
.catch((err) => {
    console.log(err);
})
}

//RESTful API
exports.user_delete_get = (req, res) => {
console.log(req.query.id);
Users.findByIdAndDelete(req.query.id)
.then((user) => {
    res.json(user);
    // res.redirect("/user/index");
})
.catch((err) => {
    console.log(err);
})
}

//RESTful API
exports.user_edit_get = (req, res) => {
Users.findById(req.query.id)
.then((user) => {
    res.json({user});
    // res.render("user/edit", {user});
})
.catch(err => {
    console.log(err);
})
}

//RESTful API
exports.user_update_put = (req, res) => {
console.log(req.body._id);
Users.findByIdAndUpdate(req.body._id, req.body, {new: true}) //return the newly updated object
.then((user) => {
    // res.redirect("/user/index");
    res.json({user})
})
.catch(err => {
    console.log(err);
})
}

//RESTful API
exports.user_update_profile_put = (req, res) => {
console.log(req.body._id);
console.log(req.body.password);
// console.log(typeof(req.body.password));
let userID = req.body._id;

if((req.body.password).toString().length > 0){
    
//bcrypt new password
let hash = bcrypt.hashSync(req.body.password, salt);
req.body.password = hash;
console.log(req.body.password);

}else{
//get old password and keep it
Users.findById(userID)
.then((userDetails) => {
    req.body.password = userDetails.password;

    console.log("returned password: " + req.body.password);

    Users.findByIdAndUpdate(req.body._id, req.body, {new: true}) //return the newly updated object
    .then((user) => {
        user.password = null;
        res.json({user})
    })
    .catch(err => {
        console.log(err);
    })

})
.catch(err => {
    console.log(err);
})

}

}