const Event = require('../models/Event');

const getEvents = async (req, res) => {
    const events = await Event.find();
    res.json(events);
};

const createEvent = async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
};

module.exports = { getEvents, createEvent };