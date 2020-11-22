import { create, Client } from '@open-wa/wa-automate'

import CreateStickerFromImage from './services/CreateStickerFromImage';
import CreateAnimatedStickerFromVideo from './services/CreateAnimatedStickerFromVideo';

create().then(client => start(client));

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
