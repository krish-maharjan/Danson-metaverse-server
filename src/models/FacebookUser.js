const mongoose = require('mongoose');

require('dotenv').config()

// Define User schema
const FacebookUserSchema = new mongoose.Schema({
    profileID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const FacebookUser = mongoose.model('FacebookUsers', FacebookUserSchema);

module.exports = FacebookUser;