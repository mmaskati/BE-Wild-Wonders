const express= require('express');


// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));
router.use(express.json());
const SpeciesCntrl= require("../controllers/species");
const isLoggedIn = require('../helper/isLoggedIn');
// const {checkType} = require("../config/checkType");

//Routes
router.get("/add", isLoggedIn, SpeciesCntrl.species_create_get);
router.post("/add", SpeciesCntrl.species_create_post);
router.get("/index", isLoggedIn, SpeciesCntrl.species_index_get);
router.get("/detail", isLoggedIn, SpeciesCntrl.species_show_get);
router.get("/delete", isLoggedIn, SpeciesCntrl.species_delete_get);
router.get("/edit", isLoggedIn, SpeciesCntrl.species_edit_get);
router.post("/update", isLoggedIn, SpeciesCntrl.species_update_post);


module.exports = router;


