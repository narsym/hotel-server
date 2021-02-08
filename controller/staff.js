const express = require('express');
const service = require('../models/services.js');
const user = require('../models/users.js');

const addService = (req, res) => {
    const serv = new service({
        name: req.body.data.name,
        desc: req.body.data.desc,
        img: req.body.data.img,
        price: req.body.data.price,
        discount: req.body.data.discount
    });
    serv.save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const availableServices = (req, res) => {
    service.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const getGuestDetails = (req, res) => {
    user.findById(req.body.data.id)
    .then((result) => {
        if(result){
            res.send(result);
        }else {
            res.send('not available');
        }
    })
    .catch((err) => console.log(err));
}

const seeAllGuests = (req, res) => {
    user.find({role:'guest'})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

module.exports = {addService, availableServices, getGuestDetails, seeAllGuests};