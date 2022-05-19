const http = require('http'); //node js k andr server ki responce and request ko handle krta h
function datacontrol(req, resp){
    resp.write("hello again");
    resp.end();
}
http.createServer(datacontrol).listen(3500);
http.createServer((req, res)=>{
    res.write("<h1>hello this is khushi singh </h1>");
    res.end();
}).listen(8000);
