
const servCust = require('../models/serviceCustomer.js');
const service = require('../models/services.js');

const analytics = (req, res) => {
    let contents = [];
    var bar = new Promise((resolve, reject) => {
        service.find()
        .then(result => {
            result.forEach((item,index) => {
            servCust.find({service: item.name})
                .then(records => {
                    let count = 0, cost = 0;
                    records.forEach((record, ind) => {
                        count += 1;
                        cost += record.cost;
                    })
                    const resultObject = {
                        'name':item.name,
                        'count':count,
                        'cost':cost
                    }
                    contents = [...contents,resultObject];
                })
                .catch(err => console.log(err));
            })
        })
    });
    bar.then(() => {
        console.log('outside the for block',contents);
        res.send(contents);
    });
}

module.exports =  analytics;