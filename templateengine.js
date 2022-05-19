const express =require('express');
const path = require ('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));
app.set('view engine', 'ejs')
app.get('/profile', (req, res)=>{
    const user ={
        name:'khushi singh',
        email:'khush@123',
        skills :['php', 'java', 'c', 'python']
    }
    res.render('profile', {user})
})
app.get('/login', (req, res)=>{
    
    res.render('login')
})
app.get('', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/about', (req, res)=>{
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/help', (req, res)=>{
    res.sendFile(`${publicPath}/help.html`);
})

app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/nopage.html`);
})
app.listen(8000);








