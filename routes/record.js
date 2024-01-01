const express= require('express');
// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());
const RecordCntrl= require("../controllers/record");
const isLoggedIn = require('../helper/isLoggedIn');


//Routes
router.get("/add", RecordCntrl.record_create_get);
router.post("/add", RecordCntrl.record_create_post);
router.get("/index", RecordCntrl.record_index_get);
router.get("/detail", RecordCntrl.record_show_get);
router.get("/delete", RecordCntrl.record_delete_get);
router.get("/edit", RecordCntrl.record_edit_get);
router.post("/update", RecordCntrl.record_update_post);


module.exports = router;


