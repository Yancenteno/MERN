const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title!"]
    },
    year: {
        type: Number,
        require: [true, "Please provide a release year!"]
    },
    genre: {
        type: String,
        require: [true, "Please provide a genre!"]

    },
    description: {
        type: String,
        require: [true, "Please provide a description!"],
        maxLength: [255, "Please keep your description under 256 characters!"]
    },
    poster: {
        type: String,
    }
}, { timestamps: true })

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie