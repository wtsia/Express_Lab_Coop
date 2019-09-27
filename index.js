const express = require('express');
const hbs = require('hbs');
const app = express();
const parser = require('body-parser');

const methodOverride = require('method-override');

app.set("view engine", "hbs");
app.use(parser.urlencoded({extended: true}));

app.use(methodOverride('_method'));



const myController = require('./controllers/myItems');

app.use('/', myController);

app.use('/assets', express.static('public'));

app.use(express.static('public'));

app.listen(7777, () => {
    console.log("running on port 7777!");
});

