const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meme');

// { useNewUrlParser: true }, () => {
//     console.log("Meme On! (connected)");
// }

mongoose.Promise = Promise;

module.exports = mongoose;

