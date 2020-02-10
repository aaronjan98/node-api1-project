const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

const port = 5000;
server.listen(port, () => console.log(`API running on port ${port}`));