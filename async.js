console.log('helo1');
setTimeout(()=>{
    console.log('in set timeout');

}, 1000);

let a=10;
let b =0;
let waitingDAta= new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve(30)
    
    }, 1000);
})

waitingDAta.then((data)=>{
    b=data;
    console.log(a+b);
})
console.log(a+b);


console.log('helo2');