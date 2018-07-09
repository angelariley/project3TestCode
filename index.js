const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const itemsController = require('./controllers/items');
const servicesController = require('./controllers/services');

app.use(parser.json());
app.use(cors());
app.use('/', itemsController);
app.use('/', servicesController);

app.listen(3000, () => {
  console.log('Running on port 3000');
});
