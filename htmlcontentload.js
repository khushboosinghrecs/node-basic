const express = require('express');
const app = express();
app.get('', (req, res)=>{
 res.send(`
<h1> hello, this is home pagev </h1><a href="/about"> Go to about page</a>`);
})

app.get('/about', (req, res)=>{
    console.log(req.query, 'khushi');
    res.send(`
    <input type ="text" placeholder ="user name" value ="${req.query.name}"/>
    <button> Click me</button>
    `);
   });

   app.get('/help', (req, res)=>{
    res.send([{
        name: 'khushi',
        email: 'khush@1289'
    }, 
    {
        name: 'khushi',
        email: 'khush@1289'
    }]
   
    );
   });


   app.listen(8000);