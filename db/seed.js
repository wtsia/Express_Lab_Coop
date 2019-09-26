const myModel = require('../models/meme');

const seedData = require('./seeds.json');

myModel.deleteOne({}) 
.then(() => {
    return myModel.insertMany(seedData);
})
.then(() => {
    console.log("WE GOT DATA");
    process.exit();
})