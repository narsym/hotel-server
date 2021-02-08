const express = require('express');
const analytics = require('../controller/analytics.js');

const router = express.Router();

router.get('/', analytics);

module.exports = router;