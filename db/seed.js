const myModel = require('../models/meme');

const seedData = require('./seeds.json');

myModel.deleteMany({})
.then(() => {
    return myModel.insertMany(seedData);
})
.then(() => {
    console.log("WE GOT DATA");
    process.exit();
})

