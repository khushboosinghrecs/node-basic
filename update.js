const dbConnection = require('./mongodb');

const updateData = async ()=>{
let data= await dbConnection();
let result = await data.updateOne(
    {name:'m 42'}, {
$set: {name: 'm 45', price: 780}
    }
)
console.warn(result);
}

updateData();