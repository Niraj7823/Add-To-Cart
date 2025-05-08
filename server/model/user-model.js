const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true
        },
        isAdmin:
        {
            type: Boolean,
            default: false
        }
    }
)

userSchema.methods.generateToken = async function () {
    return jwt.sign({ id: this._id.toString(), email: this.email, isAdmin: this.isAdmin }, process.env.JWT_SECRATE, { expiresIn: '30d' });
};


const user = new mongoose.model('User', userSchema)
module.exports = user