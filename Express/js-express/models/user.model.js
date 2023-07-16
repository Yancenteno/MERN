const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        first: {
            type: String,
            required: [true, "Please include a first name!"],
            minLength: [2, "First name at least 2 characters!"]
        },
        last: {
            type: String,
            required: [true, "Please include a last name!"],
            minLength: [2, "Last name at least 2 characters!"]
        }
    }

)

const User = mongoose.model('User', UserSchema)

module.exports = User