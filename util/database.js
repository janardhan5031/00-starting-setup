const mongoDb = require('mongodb');   // mongodb module
const MongoClient = mongoDb.MongoClient; // MongoClient class is a class that allows for making Connections to MongoDB.
let _db;

const mongoConnect = (callback) =>{


  MongoClient.connect('mongodb+srv://jani6878:jani-6878@cluster0.mqa37gt.mongodb.net/shop?retryWrites=true')
  .then(client =>{
    console.log('connected!')
    
    _db = client.db()
    callback(client)  
  })
  .catch(err => console.log(err))
}

const getDb =() =>{
  if(_db){
    return _db;
  }
  throw 'no database found!';
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;