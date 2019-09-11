const express = require('express');
// const cors = require('cors');
const app = express();
const port = 3000;

// app.use(cors());

app.get('/test', (request, response) => {
  response.send({ test: 'test' });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
