const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url) ;
const database = 'e-com';
async function dbConnection(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('product');
    // let response = await collection.find({}).toArray()
    // console.log(response);
}

module.exports = dbConnection;