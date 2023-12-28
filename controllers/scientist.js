//const Model = require('../models/X');

//require dayjs (after installing)
// const dayjs = require('dayjs')
// var relativeTime = require('dayjs/plugin/relativeTime')
// dayjs.extend(relativeTime)

exports.scientist_dashboard_get = (req,res) => {

    let userType = req.user.userType;
    
        console.log(userType);
        res.json(userType);
    
    // Model.find()
    // .then(() => {
    // })
    // .catch((error) => {
    //     console.log("There was an error: " + error);
    //     res.send("Cannot Show All Users. Please try again later.");
    // })

}