const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meme');

// { useNewUrlParser: true }, () => {
//     console.log("Meme On! (connected)");
// }

mongoose.Promise = Promise;

//Promise.reject(new Error('woops'));

module.exports = mongoose;

