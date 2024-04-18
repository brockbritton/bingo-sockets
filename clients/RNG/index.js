
const io = require('socket.io-client');
let socket = io.connect('http://localhost:3000/game');
const chance = require('chance').Chance();

let id;

function newCard() {
  //return [chance.integer({min:1, max:75}), chance.integer({min:1, max:75}), chance.integer({min:1, max:75}), chance.integer({min:1, max:75}), chance.integer({min:1, max:75})];
  return [21, 4, 16, 71, 28];
}

socket.emit('join', {
  clientId: 'RNG',
  game: 'game',
});

// socket.broadcast.emit('card-created', card);
socket.emit('card-created', newCard());

socket.on('Bingo', () => {
  clearInterval(id);
});

id = setInterval(() => {
  socket.emit('number-called', chance.integer({min:1, max:75}));
}, 1000);