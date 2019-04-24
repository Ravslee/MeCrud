const express = require('express');
const router = express.Router();

const blog_controller = 
require('../controllers/blog.controller')

router.get('/test',blog_controller.test)

module.exports = router;