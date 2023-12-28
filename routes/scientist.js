const express = require("express");
const router = express.Router();

//handle everything in json format
router.use(express.json());

//import auth controller
const scienceCtrl = require("../controllers/scientist");

//Routes
router.post("/dashboard", scienceCtrl.scientist_dashboard_get);

//Export
module.exports = router;