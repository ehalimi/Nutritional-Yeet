const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nutritionalyeet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
>>>>>>> bethany
});

module.exports = mongoose.connection;