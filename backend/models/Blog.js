const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});