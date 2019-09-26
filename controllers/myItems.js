const express = require('express');
const router = express.Router();
const myModel = require('../models/meme');


router.get('/', (req, res) => {
    myModel.find({}).then(instances => res.render('index', {instances}));
})


router.get('/new', (req, res) => {
    res.render('new');
})

router.get("/:id", (req, res) => {
    myModel.findOne({_id: req.params.id}).then(instance => res.render('show', {myInstance}));
});


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
    .then(newItem => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    }
    )
})

router.put('/:id', (req, res) => {
    myModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(instance =>{
        res.redirect('/')
}).catch(err => {
    console.log(err);
}
)
});



module.exports = router;