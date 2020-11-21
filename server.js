const wa = require('@mergulhao/wa-automate');
const gm = require('gm').subClass({ imageMagick: true })

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(async message => {
    const { mimetype, type, isGroupMsg, from, sender } = message;

    if (isGroupMsg === false && type === 'image') {
      await client.sendText(
        from,
        `${sender.pushname}, recebi sua imagem e já estou criando a figurinha 🥳`
      );

      try {
        const mediaData = await wa.decryptMedia(message);
        const image = gm(Buffer.from(mediaData, 'base64')).resize(512, 512)

        let buff = Buffer(image.sourceBuffer);
        let base64data = buff.toString('base64');

        await client.sendImageAsSticker(
          from,
          `data:${mimetype};base64,${base64data}`
        )
      } catch (error) {
        console.log(error)
      }
    }
  });
}
