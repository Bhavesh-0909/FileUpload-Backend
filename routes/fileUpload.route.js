const express = require('express');
const router = express.Router()

const {localUpload}= require('../controller/fileUpload.controller');

router.post('/localUpload', localUpload);


module.exports = router;