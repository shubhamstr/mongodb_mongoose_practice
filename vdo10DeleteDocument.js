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

const createDoc = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "Node",
            ctype: "backend",
            videos: 80,
            author: "Thapa",
            active: true,
        })
        const nodePlaylist = new Playlist({
            name: "Node",
            ctype: "backend",
            videos: 80,
            author: "Thapa",
            active: true,
        })
        const jsPlaylist = new Playlist({
            name: "js",
            ctype: "frontend",
            videos: 80,
            author: "Thapa",
            active: true,
        })
        const htmlPlaylist = new Playlist({
            name: "html",
            ctype: "frontend",
            videos: 80,
            author: "Thapa",
            active: true,
        })
        const cssPlaylist = new Playlist({
            name: "css",
            ctype: "frontend",
            videos: 80,
            author: "Thapa",
            active: true,
        })
    
        const result = await Playlist.insertMany([reactPlaylist,nodePlaylist,jsPlaylist,htmlPlaylist,cssPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// createDoc();



const getDoc = async () => {
    try {
        // const res = await Playlist.find();
        // const res = await Playlist.find({ctype: "frontend"});
        // const res = await Playlist.find({ctype: "frontend"}).select({name:1});
        // const res = await Playlist.find({ctype: "frontend"}).select({name:1}).limit(1);
        // const res = await Playlist.find({videos: {$gt: 50}});
        // const res = await Playlist.find({videos: {$gte: 80}});
        // const res = await Playlist.find({videos: {$lt: 90}});
        // const res = await Playlist.find({ctype: {$in: ["frontend","backend"]}});
        // const res = await Playlist.find({ctype: {$nin: ["frontend","backend"]}});
        // const res = await Playlist.find({$or: [{ctype: "backend"},{author:"Thapa"}]});
        // const res = await Playlist.find({$and: [{ctype: "backend"},{author:"Thapa"}]});
        // const res = await Playlist.find({$and: [{ctype: "backend"},{author:"Thapa"}]}).countDocuments();
        // const res = await Playlist.find().sort({name: 1});
        const res = await Playlist.find().sort({name: -1});
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}



// getDoc();



const updateDoc = async (id) => {
    try {
        // const res = await Playlist.updateOne({_id: id}, {
        //     $set: {
        //         name: "HTML"
        //     }
        // });
        // const res = await Playlist.findByIdAndUpdate({_id: id}, {
        //     $set: {
        //         ctype: "Front End"
        //     }
        // }, {
        //     useFindAndModify: false
        // });
        const res = await Playlist.findByIdAndUpdate({_id: id}, {
            $set: {
                ctype: "Front End"
            }
        }, {
            new: true,
            useFindAndModify: false
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}





// updateDoc('61e3e6ef6db7f13c1095eb34');



const deleteDoc = async (id) => {
    try {
        // const res = await Playlist.deleteOne({_id: id});
        const res = await Playlist.findByIdAndDelete({_id: id});
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}





deleteDoc('61e3e6ef6db7f13c1095eb33');