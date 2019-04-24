const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const blog = require('./routes/blog.route')
const app = express();
const port = 3000;

const dev_db_url = "mongodb+srv://techticks:172626@cluster0-lv9ul.mongodb.net/test?retryWrites=true"
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/blogs',blog )
app.listen(port, () => {
    console.log('Express server listening at port 3000');
})