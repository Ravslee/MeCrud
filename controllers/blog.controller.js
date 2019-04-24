const Blog = require('../models/blog.model')


exports.test = ((req,res)=>{

   return res.send("Blog test controller working")
})