const mongoose = require('../db/connection');
const moment = require('moment');

const MemeSchema = new mongoose.Schema({
    url: String,
    title: String,
    description: String,
    date: {type: String, default: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
});

const memeModel = mongoose.model("meme", MemeSchema);

module.exports = memeModel;