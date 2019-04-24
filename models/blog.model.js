const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BlogSchema = new Schema({
    title: {type:String, required:true},
    body:{type:String, required:true},
    img:{type:String},
    tags:{type:Array}
})

module.exports = mongoose.model('Blogs',BlogSchema);