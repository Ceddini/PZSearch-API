const express = require('express');
const cors = require('cors');

const animals = require('./animals.json');

let app = express();

app.use(cors());

app.listen(80);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/animals', (req, res) => {
    res.json(animals);
});
