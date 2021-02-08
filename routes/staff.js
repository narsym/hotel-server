const express = require('express');
const routes = require('../controller/staff.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('staff');
});

router.post('/addService', routes.addService);

router.get('/availableServices', routes.availableServices);

router.post('/getGuestDetails', routes.getGuestDetails);

router.get('/seeAllGuests', routes.seeAllGuests);

module.exports = router;