const app =require ('./app');
const fs= require('fs');
const fslocal= require('fs').writeFileSync; //node js is async language
console.log(__dirname);  //node js is single threaded language
console.log(__filename);
console.log(app.z());
console.log('hello');


const arr=[2, 3, 4, 5, 6, 3 ,3];
arr.filter((item)=>{
    console.log(item);
})

let result = arr.filter((item)=>{
    return item ===3;
})
fs.writeFileSync('hello.txt', 'like and subscribe');
fslocal('abc.txt', 'wrote only in file');
console.log(result);
console.log(arr);
