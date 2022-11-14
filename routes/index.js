const express = require('express');
const router = express.Router();
// const passport = require('passport');

const fileController = require('../controllers/file_controller');

router.get('/', fileController.home);

router.post('/upload-file', fileController.uploadFile);

router.get('/read-csv-file/:file', fileController.readCSVFile);

module.exports = router;