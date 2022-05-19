const express = require('express');
const app = express();

const reqFilter =( req, res, next)=>{
    if(!req.query.age)
    {
        res.send('please provide age');
    }
    else if(req.query.age< 10){
        res.send(' u cannot access this page')
    }
    else{
        next();
    }
   
}
// app.use(reqFilter);

app.get('', (req, res)=>{
 res.send(`
<h1> hello, this is home pagev </h1><a href="/about"> Go to about page</a>`);
})

app.get('/about', reqFilter, (req, res)=>{
    console.log(req.query, 'khushi');
    res.send(`
    <input type ="text" placeholder ="user name" value ="${req.query.name}"/>
    <button> Click me</button>
    `);
   });

   app.listen(8000);