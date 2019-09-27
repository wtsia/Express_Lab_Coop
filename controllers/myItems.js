const express = require('express');
const router = express.Router();
const myModel = require('../models/meme');

router.delete('/:id', (req, res) => {
    myModel.findOneAndDelete({_id: req.params.id}).then(() => {
        res.redirect('/');
    })
})

router.post('/', (req, res) => {
    req.body.created_at = new Date();
    myModel.create(req.body)
    .then(newItem => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    }
    )
});

router.put('/:id', (req, res) => {
    myModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(instance =>{
        res.redirect('/')
    }) .catch(err => {
        console.log(err);
    }
    )
});

router.get('/', (req, res) => {
    myModel.find({}).then(instances => res.render('index', {instances}));
})

router.get('/edit/:id', (req, res) =>
{
    myModel.findOne({_id: req.params.id})
    .then(instance => {
        res.render('edit', {instance})
    }).catch(err => {
        console.log(err);
    }
    )
})

router.get('/new', (req, res) => {
    res.render('new');
})

router.get("/:id", (req, res) => {
    myModel.findOne({_id: req.params.id}).then(instance => res.render('show', {instance}));
});

module.exports = router;