
const io = require('socket.io-client');
let socket = io.connect('http://localhost:3000/game');

let cardState;

socket.emit('join', {
  clientId: 'player',
  game: 'game',
});

socket.on('card-created', (card) => {
  console.log('Card created:', card);
  cardState = card;
});

socket.on('number-called', (number) => {
  console.log('Number called: ', number);
  if (cardState.includes(number)) {
    socket.emit('Bingo', cardState);
  }
});
