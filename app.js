const express = require('express');
const app = express();
const bfhlRouter = require('./routes/bfhl');

app.use(express.json());
app.use('/bfhl', bfhlRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});