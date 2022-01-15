const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/list", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => console.log("connection successful")).catch((err) => console.log(err));


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})


const Playlist = new mongoose.model("Playlist", playlistSchema)