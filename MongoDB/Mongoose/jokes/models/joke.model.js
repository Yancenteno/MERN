const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Setup is required"],
            minLength: [10, "Setup needs at least 10 characters"]
        },
        punchline: {
            type: String,
            required: [true, "punchline is required"],
            minLength: [3, "Punchline needs at least 3 characters"]
        }
    }
)

const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke