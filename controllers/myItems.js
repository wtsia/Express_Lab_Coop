const express = require('express');
const router = express.Router();
const myModel = require('../models/meme');


router.get('/', (req, res) => {
    myModel.find({}).then(myInstances => res.render('index', {myInstances}));
})

router.get("/:id", (req, res) => {
    myModel.findOne({_id: req.params.id}).then(myInstance => res.render('show', {myInstance}));
});

router.get('/new', (req, res) => {
    res.render('new');
})







module.exports = router;