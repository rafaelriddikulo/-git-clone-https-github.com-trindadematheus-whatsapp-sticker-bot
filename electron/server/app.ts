import { Client } from "@open-wa/wa-automate";
import { BrowserWindow, ipcMain } from 'electron'

import CreateStickerFromImage from './services/CreateStickerFromImage'
import CreateAnimatedStickerFromVideo from './services/CreateAnimatedStickerFromVideo'
import CreateStickerFromUpload from "./services/CreateStickerFromUpload";

export default async function handleEvents(client: Client, mainWindow: BrowserWindow) {
  mainWindow.webContents.send('CONNECTED', await getUserData(client))

  ipcMain.on('CREATE_STICKER_UPLOAD', (event, file) => {
    CreateStickerFromUpload(client, file)
  })

  client.onAnyMessage(async message => {
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