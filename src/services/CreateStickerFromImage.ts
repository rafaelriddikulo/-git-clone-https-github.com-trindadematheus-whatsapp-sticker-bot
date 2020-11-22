import { decryptMedia, Client, Message } from '@mergulhao/wa-automate'
import gm, { State } from 'gm'

interface ImageType extends State {
  sourceBuffer: String;
}

export default async function CreateStickerFromImage(client: Client, message: Message) {
  const { mimetype, from, sender } = message;

  await client.sendText(
    from,
    `*${sender.pushname}*, sua figurinha está pronta! 🤩`
  );

  const mediaData = await decryptMedia(message);
  const image = <ImageType>gm(mediaData).resize(512, 512)

  let buff = Buffer.from(image.sourceBuffer);
  let base64data = buff.toString('base64');

  await client.sendImageAsSticker(
    from,
    `data:${mimetype};base64,${base64data}`
  )
}