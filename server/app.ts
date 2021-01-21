import { Client } from "@open-wa/wa-automate";
import { Socket } from 'socket.io'

import CreateStickerFromImage from './services/CreateStickerFromImage'
import CreateAnimatedStickerFromVideo from './services/CreateAnimatedStickerFromVideo'

export default function handleEvents(client: Client, socket: Socket) {
  client.onStateChanged(state => {
    if (state === 'CONNECTED') socket.emit('CONNECTED')

    if (state === 'DISCONNECTED') socket.emit('DISCONNECTED')
  });

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