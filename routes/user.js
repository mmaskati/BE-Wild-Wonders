const express = require('express');

const router = express.Router();

const userCntrl = require("../controllers/user");

router.get('/index', userCntrl.user_index_get);

//router.get('/delete', userCntrl.user_delete_get);

module.exports = router;