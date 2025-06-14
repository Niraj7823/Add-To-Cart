const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }
});

const Contact = mongoose.model('Contact', userSchema);

module.exports = Contact;
