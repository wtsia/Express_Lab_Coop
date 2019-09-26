const mongoose = require('../db/connection');

const MemeSchema = new mongoose.Schema({
    url: String,
    title: String,
    description: String,
    date: {type: Date, default: Date.now}
});

const memeModel = mongoose.model("meme", MemeSchema);

module.exports = memeModel;