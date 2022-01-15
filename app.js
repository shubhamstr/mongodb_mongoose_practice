const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => console.log("connection successful")).catch((err) => console.log(err));


// create document
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [3, "minimum 3 letters"],
        maxlength: 30
    },
    ctype: String,
    videos: {
        type: Number, validate(value) {
            if (value < 0) {
                throw new Error('videos count should not negative');
            }
        }
    },
    author: String,
    email: {
        type: String, validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email Invalid");
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

// create collection
const Playlist = new mongoose.model("Playlist", playlistSchema);




const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "React2 JS",
            ctype: "Front End",
            videos: 50,
            author: "Shubham",
            active: true
        });
        const expressPlaylist = new Playlist({
            name: "Express",
            ctype: "Back End",
            videos: 50,
            author: "Shubham",
            active: true
        });
        const mongoosePlaylist = new Playlist({
            name: "Mongoose",
            ctype: "Back End",
            videos: 50,
            author: "Shubham",
            active: true
        });
        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            ctype: "Database",
            videos: 50,
            author: "Shubham",
            active: true
        });
        const reduxPlaylist = new Playlist({
            name: "Redux34",
            email: "shub@gmail.com",
            ctype: "Front End",
            videos: 20,
            author: "Shubham",
            active: true
        });
        // const result = await Playlist.insertMany([reactPlaylist, expressPlaylist, mongoosePlaylist, mongoPlaylist, reduxPlaylist]);
        const result = await Playlist.insertMany([reduxPlaylist]);
        // const result = await reactPlaylist.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
createDocument();



const getDocument = async () => {
    const result = await Playlist.find();
    // const result = await Playlist.find({ ctype: "Front End" });
    // const result = await Playlist.find({ ctype: "Front End" }).select({ name: 1 });
    // const result = await Playlist.find({ ctype: "Front End" }).select({ name: 1 }).limit(1);

    // const result = await Playlist.find({ videos: { $gt: 50 } });
    // const result = await Playlist.find({ videos: { $lt: 50 } });
    // const result = await Playlist.find({ videos: { $nin: [50, 70] } });

    // const result = await Playlist.find({ $or: [{ ctype: "Back End" }, { ctype: "Database" }] });

    // const result = await Playlist.find({ $or: [{ ctype: "Back End" }, { ctype: "Database" }] }).countDocuments();
    // const result = await Playlist.find({ $or: [{ ctype: "Back End" }, { ctype: "Database" }] }).sort();
    // const result = await Playlist.find({ $or: [{ ctype: "Back End" }, { ctype: "Database" }] }).sort({ name: -1 });
    console.log(result);

}

// getDocument();


const updateDocument = async (_id) => {
    try {

        const result = await Playlist.updateOne({ _id }, { $set: { name: "JavaScript" } });
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}

// updateDocument("608af1af8d006142fcc9b727");


const deleteDocument = async (_id) => {
    try {

        const result = await Playlist.deleteOne({ _id });
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}

// deleteDocument("608af1af8d006142fcc9b727");
