const http = require('http')
const server = http.createServer((req,res) => {
console.log(' request...');
res.setHeader('Content-Type','text/html');
res.write(' Hello HarryNguyen') ;
res.write(' With from NodeJS');
res.end()

})

server.listen(3000,'localhost',() =>{
    console.log('Server is running in port 3000')
})