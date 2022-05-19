const dbConnection = require('./mongodb')

const insert = async ()=>{
    const db = await dbConnection();
    const result = await db.insertMany(
        [
            {
        name: 'm 42',
        brand: 'my brand2',
        price: 232,
        category: 'branded2'},
        {
            name: 'm 42',
            brand: 'my brand2',
            price: 232,
            category: 'branded2'},

    ])
 if(result.acknowledged){
     console.log("data inserted");
 }
}
 insert();