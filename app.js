const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

const storage = require('./storage');

app.use(express.json());

app.get('/', (req, res) => {
    res.send(storage.getAllMessages());
});

app.get('/message/:id', (req, res) => {
    res.send(storage.getMessage(req.params.id));
});

app.post('/message', (req, res) => {
    res.send(storage.addMessage({ id: uuidv4(), message: req.body.message}));
});

app.put('/message/:id', (req, res) => {
    res.send(storage.updateMessage({ id: req.params.id, message: req.body.message}));
});

app.delete('/message/:id', (req, res) => {
    res.send(storage.removeMessage(req.params.id));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
