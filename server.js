const app = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
io.on('connection', function(socket) {
  console.log('Connected:  ', socket.id);
  socket.on('disconnect', async msg => {
    console.log(`${socket.id} disconnected`);
    socket.infor = {
      ...socket.information,
      status: 'Disconnect',
      socketId: socket.id,
      time: Date(),
    };
    msg = socket.infor;
    console.log(msg);
  });
  socket.on('input_number_python', async msg => {
		console.log(msg)
    socket.broadcast.emit('input_number_web', msg);
  });
  socket.on('output_number_python', async msg => {
		console.log(msg)
    socket.broadcast.emit('output_number_web', msg);
  });
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});