const express = require('express');
const router = express.Router()

const {localUpload, fileUploader}= require('../controller/fileUpload.controller');


router.post('/localUpload', localUpload);
router.post('/fileUploader', fileUploader);

module.exports = router;