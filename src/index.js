const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const GRouter = require('../routes/guest.js');
const SRouter = require('../routes/staff.js');
const ARouter = require('../routes/analytics.js');
const RLRouter = require('../routes/auth.js');

const path = require('path');
const { fileURLToPath } = require('url');

const app = express();


app.use(express.json()); 
app.use(express.urlencoded({extended:false}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://admin:admin123@cluster0.ryzxn.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`)))
.catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);

app.use('/guest', GRouter);
app.use('/staff', SRouter);
app.use('/analytics', ARouter);
app.use('/authentication', RLRouter);

app.use('/', (req, res) => {
    res.send('hello main');
});