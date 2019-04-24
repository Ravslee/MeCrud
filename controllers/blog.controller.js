const Blogs = require('../models/blog.model')


exports.test = ((req, res) => {
   return res.send("Blog test controller working")
})
let where={}

exports.getAllBlogs = ((req, res, next) => {
})

exports.getBlogById = ((req, res,next) => {
   Blogs.findById(req.params.blogId, (err, product) => {
      if (err) return next(err);
      
      res.send(product);
   })
})

exports.createBlog = ((req, res, next) => {
   let blog = new Blogs({
      title: req.body.title,
      body: req.body.body,
      img: req.body.img,
      tags: req.body.tags
   });
   blog.save((err) => {
      if (err) {
         return next(err);
      }
      res.send('Blog Created successfully')
   });
});

exports.updateBlog = ((req, res, next) => {
   Blogs.findOneAndUpdate(req.params.blogId, { $set: req.body }, (err, blog) => {
      if (err) {
         return  next(err);
      }
      res.send({
         message: "Blog updated successfully",
         data: blog
      });
   })

})

exports.deleteBlog = ((req, res, next) => {

   Blogs.findOneAndRemove(req.params.blogId, (err, blog) => {
      if (err) {
        return next(err);
      }

      res.send({
         message: "Blog deleted successfully!"
      })
   })
})