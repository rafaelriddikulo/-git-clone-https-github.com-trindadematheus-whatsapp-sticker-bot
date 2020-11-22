import { create, Client } from '@mergulhao/wa-automate'
import gm from 'gm'

import CreateStickerFromImage from './services/CreateStickerFromImage';

gm.subClass({ imageMagick: true })
create().then(client => start(client));

function start(client: Client) {
  client.onMessage(async message => {
    const { type, isGroupMsg } = message;

    if (isGroupMsg === false && type === 'image') {
      await CreateStickerFromImage(client, message);
    }
  });
}
