const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meme');

module.exports = mongoose;