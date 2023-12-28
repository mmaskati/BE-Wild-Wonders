const express = require("express");
const router = express.Router();

//handle everything in json format
router.use(express.json());

//import auth controller
const authCtrl = require("../controllers/auth");

//Routes
router.post("/signup", authCtrl.auth_signup_post);
router.post("/signin", authCtrl.auth_signin_post);


//Export
module.exports = router;