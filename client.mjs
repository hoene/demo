import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080/demo');

ws.on('open', function open() {
  ws.send('welcome');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});