//set up connection mongodb
const mongoose = require ('mongoose');
const mongoDB = 'mongodb://localhost/Practise';

mongoose.connect(
    mongoDB,{useNewUrlParser:true}
).then(()=> console.log('MongoDB Connected'));

mongoose.Promise = global.Promise;

module.exports = mongoose;
