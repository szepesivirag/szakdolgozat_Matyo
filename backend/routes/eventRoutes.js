const express = require('express');
const router = express.Router();
const { getEvents, createEvent } = require('../controllers/eventController');
const auth = require('../middleware/authMiddleware');

router.get('/', getEvents);
router.post('/', auth, createEvent);