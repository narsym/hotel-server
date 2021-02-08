const mongoose = require('mongoose');
const schema = mongoose.Schema;

const serviceSchema = new schema({
    name: String,
    desc: String,
    img: String,
    price: Number,
    discount: Number
}, {timestamps: true});

const service = mongoose.model('service', serviceSchema);

module.exports = service;