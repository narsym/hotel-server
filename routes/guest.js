const express = require('express');
const {seeServices, buyService, seeUsingServices, usingServiceStatus, checkout, updateStatus} = require('../controller/guest.js');

const router = express.Router();



router.get('/seeServices', seeServices);
router.post('/buyService', buyService);
router.post('/seeUsingServices', seeUsingServices);
router.get('/usingServiceStatus', usingServiceStatus);
router.post('/checkout', checkout);
router.post('/updateStatus', updateStatus);

module.exports = router;