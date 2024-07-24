const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3001;


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


//sets up server and starts listening once the connection is made
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${port}!`);
    });
  });





