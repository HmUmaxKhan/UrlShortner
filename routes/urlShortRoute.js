const express = require('express');
const { handleUrl, handlegetUrl } = require('../controller/urlControllers');
const router = express.Router();

router.post("/",handleUrl);

router.get("/:shorturl",handlegetUrl)

module.exports = router