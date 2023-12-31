const express = require('express');

const router = express.Router();
router.use(express.json());

const userCntrl = require("../controllers/user");
router.get("/index", userCntrl.user_index_get);
router.post('/fetch', userCntrl.user_fetch_post); //this is used for fetching user data to F.E.

//router.get('/delete', userCntrl.user_delete_get);

module.exports = router;