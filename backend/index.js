const express = require('express');
// const cors = require('cors');
const app = express();
const port = 3000;

// app.use(cors());

app.get('/', (request, response) => {
  response.send({});
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});