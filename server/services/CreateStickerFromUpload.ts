import { Client } from '@open-wa/wa-automate'

export default async function CreateStickerFromUpload(client: Client, file: string) {
  const userData = await client.getMe()

  await client.sendText(
    userData.status,
    `*${userData.pushname}*, sua figurinha está sendo criada, aguarde! 🤩`
  );

  await client.sendImageAsSticker(
    userData.status,
    file
  )
}