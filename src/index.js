const express = require('express');
const bodyParser = require('body-parser');
//const dbConfig = require('./db/config');
const todoRouter = require('./routes/todo');

const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

//const connection = require('./db/connection');
//const query = require('./db/query');

app.get('/', (req, res, next) => next());
app.use('/todo', todoRouter);

app.use(function(req, res, next) {
    res.sendFile(__dirname + '/static/404.html');
});

app.listen(port, () => {
    console.log(`Simple CRUD application listening on port ${port}!`)
});
