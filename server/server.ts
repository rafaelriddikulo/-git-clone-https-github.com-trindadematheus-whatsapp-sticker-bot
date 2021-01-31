import { create, ev } from '@open-wa/wa-automate'
import cors from 'cors'

import handleEvents from './app';

const app = require('express')();
const http = require('http').Server(app);

const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"]
  }
})

app.use(cors())

io.on('connection', async (socket: any) => {
  ev.on('qr.**', async qrcode => {
    const imageBuffer = Buffer.from(
      qrcode.replace('data:image/png;base64,', ''),
      'base64'
    );

    socket.emit('QR_CODE', imageBuffer)
  });

  ev.on('STARTUP.**', (data) => {
    socket.emit('STARTUP', data)
  });

  create({
    disableSpins: true,
    useStealth: true
  }).then(client => handleEvents(client, socket))
})

http.listen(3000, function () {
  console.log(`Node Server APP listening at http://localhost:3000`)
});
