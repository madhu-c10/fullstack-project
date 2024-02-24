const mongoose = require('mongoose');
const dburl = 'mongodb://localhost:27017/todolist'

mongoose
  .connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'todolist',
  })
  .then(() => {
    console.log('Connected to the Database.');
  })
  .catch(err => console.error(err));