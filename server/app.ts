import { Client } from "@open-wa/wa-automate";
import { Socket } from 'socket.io'

import CreateStickerFromImage from './services/CreateStickerFromImage'
import CreateAnimatedStickerFromVideo from './services/CreateAnimatedStickerFromVideo'
import CreateStickerFromUpload from "./services/CreateStickerFromUpload";

export default async function handleEvents(client: Client, socket: Socket) {
  socket.emit('CONNECTED', await getUserData(client))

  socket.on('CREATE_STICKER_UPLOAD', (file) => {
    CreateStickerFromUpload(client, file)
  })

  client.onMessage(async message => {
    const { type, caption } = message;

    // Generate sticker from an image
    if (caption === '!fig' && type === 'image') {
      await CreateStickerFromImage(client, message);
    }

    // Generate an animated sticker from a video
    if (caption === '!fig' && type === 'video') {
      await CreateAnimatedStickerFromVideo(client, message);
    }
  });
}

async function getUserData(client: Client) {
  const userData = await client.getMe()
  const profilePic = await client.getProfilePicFromServer(userData.status)

  return {
    ...userData,
    profile_url: profilePic
  }
}