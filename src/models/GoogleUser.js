const mongoose = require('mongoose');

require('dotenv').config()

// Define User schema
const GoogleUserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
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

const GoogleUser = mongoose.model('GoogleUser', GoogleUserSchema);

module.exports = GoogleUser;