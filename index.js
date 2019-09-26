const express = require('express');
const hbs = require('hbs');
const app = express();
const parser = require('body-parser');
const bodyParser = app.use(parser.urlencoded({extended: true}));

app.set("view engine", "hbs");

const myController = require('./controllers/myItems');

app.use('/', myController);

app.use(express.static('/public'));


app.listen(7777, () => {
    console.log("running on port 7777!");
});
