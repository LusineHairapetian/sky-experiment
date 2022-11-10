const express = require('express')
const app = express()
const router = express.Router();

/* Controllers */
const IndexController = require('../controllers');
const AgreementController = require('../controllers/agreement');

/* Main Routes */
router.get('/agreement', AgreementController.getAgreement);
router.post('/agreement', AgreementController.createAgreement);


module.exports = router;