const express = require('express');
const router = express.Router();

const blogController = 
require('../controllers/blog.controller')

router.get('/blogs',blogController.getAllBlogs);
router.get('/blogs/:blogId',blogController.getBlogById);
router.post('/blogs/create',blogController.createBlog);
router.put('/blogs/:blogId',blogController.updateBlog);
router.delete('/blogs/:blogId',blogController.deleteBlog)

module.exports = router;