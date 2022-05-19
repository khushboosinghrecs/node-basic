const express = require("express");
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();
route.use(reqFilter);

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

      app.get('/contact', (req, res)=>{
        res.send(`
       <h1> hello, this is contact pagev </h1>`);
       })
       
       app.use('/', route);
      app.listen(5000);
