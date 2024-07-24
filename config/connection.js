const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//connection to MongoDB
mongoose.connect(process.env.MONGO_URI);

//export connection
module.exports = mongoose.connection;

