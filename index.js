const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/api/users', (req, res) => {
    db.find().then(users => {
        res.status(200).json(users);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: "The users information could not be retrieved." })
    });
})

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    db.findById(id).then(db => {
        db ? res.status(200).json(db) :
        res.status(400).json({ message: "The user with the specified ID does not exist." });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: "The user information could not be retrieved." })
    });
})

const port = 5000;
server.listen(port, () => console.log(`API running on port ${port}`));