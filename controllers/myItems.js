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

router.get('/edit/id', (req, res) =>
{
    myModel.findOne({_id: req.params.id})
    .then(instance => {
        res.render('edit', {myInstance})
    }).catch(err => {
        console.log(err);
    }
    )
})
router.post('/', (req, res) => {
    myModel.create(req.body)
    .then(myNewItem => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    }
    )
})

router.put('/:id', (req, res) => {
    myModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(myInstance =>{
        res.redirect('/')
}).catch(err => {
    console.log(err);
}
)
});



module.exports = router;