const express = require('express');
const app = express();

const server = require('http').Server(app);

//Socket.io
let onlineUsers = {};
let channels = {"General" : []}

const io = require('./node_modules/socket.io')(server);
io.on("connection", (socket) => {
    require('./sockets/chat.js')(io, socket, onlineUsers, channels);

});

//Express View Engine for Handlebars
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Establish your public folder
app.use('/public', express.static('public'))


app.get('/', (req, res) => {
  res.render('index.handlebars');
});
port = process.env.PORT || 3000

server.listen(port, "0.0.0.0", () => {
  console.log('Server listening on Port 3000');
});