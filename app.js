const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/*.css', (req, res) => {
    res.sendFile(__dirname + '/public' + req.url);
});

app.get('/*.js', (req, res) => {
    res.sendFile(__dirname + '/public' + req.url);
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`Server 돌아가는 중 http://localhost:${PORT}`);
});