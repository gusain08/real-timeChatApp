const express = require('express');

const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(http);

app.use(express.static(__dirname +'/public'));


http.listen(port, ()=>{
    console.log(`Server is Create ${port}`);
});


app.get('/',(r,e)=>{
   e.sendFile(__dirname + '/index.html');
});


// Socket code  

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})