const express= require('express');


// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));
router.use(express.json());
const SpeciesCntrl= require("../controllers/species");
const isLoggedIn = require('../helper/isLoggedIn')


//Routes
router.get("/add", SpeciesCntrl.species_create_get);
router.post("/add", SpeciesCntrl.species_create_post);
router.get("/index", SpeciesCntrl.species_index_get);
router.get("/detail", SpeciesCntrl.species_show_get);
router.get("/delete", SpeciesCntrl.species_delete_get);
router.get("/edit", SpeciesCntrl.species_edit_get);
router.post("/update", SpeciesCntrl.species_update_post);


module.exports = router;


