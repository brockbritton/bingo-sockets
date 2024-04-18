
const io = require('socket.io');
const PORT = 3000;
const bingoServer = new io.Server(PORT).of('/game');

bingoServer.on('connection', (socket) => {
  
  socket.on('join', (payload) => {
    socket.join(payload.game);
    console.log(`Client joined /game: ${payload.game}`);
  });

  socket.on('card-created', (card) => {
    console.log('Card created:', card);
    bingoServer.emit('card-created', card);
  });

  socket.on('number-called', (number) => {
    console.log('HUB Number HiT:', number);
    
    bingoServer.emit('number-called', number);
  });

  socket.on('Bingo', (card) => {
    console.log('Bingo! ', card);
    console.log('Thank you for playing! :-)');
    bingoServer.emit('Bingo');
  });
    
});     
