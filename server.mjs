import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let count = 0;

let directions = [
  "N","NE","E","SE","S","SW","W","NW","random"
];   

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  
  setInterval(() => {
    let obj = { "direction": directions[count] };
    if(count == 8) {
      obj.direction = directions[Math.floor(Math.random()*8)];
      count=0;
    }
    else
      count++;
      
    ws.send(JSON.stringify(obj));
  },1000);
});
