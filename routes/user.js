const express = require('express');
const methodOverride = require('method-override');

const router = express.Router();
router.use(express.json());

router.use(methodOverride('_method'));

const userCntrl = require("../controllers/user");
const isLoggedIn = require("../helper/isLoggedIn");

router.get("/index", isLoggedIn, userCntrl.user_index_get);
router.post('/fetch', userCntrl.user_fetch_post); //this is used for fetching user data to F.E.

router.get("/add", userCntrl.user_create_get);
router.post("/add", isLoggedIn, userCntrl.user_create_post);

router.get("/index", userCntrl.user_index_get); 
router.get("/detail", userCntrl.user_show_get);

router.delete("/delete", isLoggedIn, userCntrl.user_delete_get);

router.get("/edit", isLoggedIn, userCntrl.user_edit_get);
router.put("/update", isLoggedIn, userCntrl.user_update_put);
router.post("/profile", isLoggedIn, userCntrl.user_update_profile_put);

module.exports = router;