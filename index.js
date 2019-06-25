const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  app.listen(3000);
  console.log('Server is listening on port 3000.');
});
