const mongoose = require('../db/connection');

const myMemeSchema = new mongoose.Schema({
    url: String,
    title: String,
    description: String,
    date: {type: Date, default: Date.now}
});

const memeModel = mongoose.model('Mymeme', myMemeSchema);

module.exports = memeModel;