import { create, Client, ev } from '@open-wa/wa-automate'
import cors from 'cors'

import CreateStickerFromImage from './services/CreateStickerFromImage'
import CreateAnimatedStickerFromVideo from './services/CreateAnimatedStickerFromVideo'

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
  create({
    disableSpins: true,
    useStealth: true
  }).then(client => start(client))

  ev.on('qr.**', async qrcode => {
    const imageBuffer = Buffer.from(
      qrcode.replace('data:image/png;base64,', ''),
      'base64'
    );

    socket.emit('QR_CODE', imageBuffer)
  });
});

function start(client: Client) {
  client.onMessage(async message => {
    const { type, isGroupMsg } = message;

    // Generate sticker from an image
    if (isGroupMsg === false && type === 'image') {
      await CreateStickerFromImage(client, message);
    }

    // Generate an animated sticker from a video
    if (isGroupMsg === false && type === 'video') {
      await CreateAnimatedStickerFromVideo(client, message);
    }
  });
}

http.listen(3000, function () {
  console.log(`Node Server APP listening at http://localhost:3000`)
});
