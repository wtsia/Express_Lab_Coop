const express = require('express');
const hbs = require('hbs');
const app = express();
const parser = require('body-parser');
const bodyParser = app.use(parser.urlencoded({extended: true}));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine", "hbs");

const myController = require('./controllers/myItems');

app.use('/', myController);

app.use('/assets', express.static('public'));
app.use(express.static('/public'));
//app.use(express.static(path.join(__dirname, '/public'));
//https://stackoverflow.com/questions/45395947/what-is-the-proper-way-of-referencing-css-and-js-files-with-handlebars
//testest

app.listen(7777, () => {
    console.log("running on port 7777!");
});

