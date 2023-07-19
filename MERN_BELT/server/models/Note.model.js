const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [2, "Title must contain 2 characters"]
    },

    body: {
        type: String,
        required: [true, "Body is required"],
        maxlength: [255, "Body must contain max fo 255 characters!"]
    }
}, { timestamps: true })

module.exports.Note = mongoose.model('Note', NoteSchema)