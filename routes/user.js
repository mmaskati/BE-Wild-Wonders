const express = require('express');

const router = express.Router();
router.use(express.json());

const userCntrl = require("../controllers/user");

router.post('/fetch', userCntrl.user_fetch_post);

//router.get('/delete', userCntrl.user_delete_get);

module.exports = router;