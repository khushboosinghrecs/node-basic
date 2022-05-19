const dbConnection = require('./mongodb')

const deleteData= async ()=>{
let data = await dbConnection();
let result = await data.deleteOne({
    name:'m 45'

})
console.warn(result);
if(result.acknowledged){
    console.warn('record deleted'); //if data will not be there then deletedcount many;
}

}
deleteData();