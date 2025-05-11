const express = require('express');
const router = express.Router();
const { getBlogs, createBlog } = require('../controllers/blogController');
const auth = require('../middleware/authMiddleware');

router.get('/', getBlogs);
router.post('/', auth, createBlog);