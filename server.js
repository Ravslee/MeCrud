const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const blog = require('./routes/blog.route')
const app = express();
const port = 3000;

const dev_db_url = "mongodb+srv://techticks:172626@cluster0-lv9ul.mongodb.net/test?retryWrites=true"
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB,{ useNewUrlParser: true })
.then(()=>{
    console.log("Mongo db connected to remote server")
},
err=>{
    console.error(err)
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/core/api',blog );

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.listen(port, () => {
    console.log('Express server listening at port 3000');
});