const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let messages = [ "Hello", "Yes", "It's working"];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    let msg = req.body;
    messages.push(msg.message);
    res.send(msg);
});

app.listen(port, () => console.log('app running'));