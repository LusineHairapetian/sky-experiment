const mongoose = require('mongoose');
const { DATABASE_URI } = process.env;

mongoose.connect(DATABASE_URI);

mongoose.connection.on('error', (error) => {
  console.log('Error while connecting to mongodb', error);
});

mongoose.connection.on('connection', () => {
  console.log('Connection successful');
});

module.exports = mongoose;