const wa = require('@mergulhao/wa-automate');
const jimp = require('jimp');
const webp = require('webp-converter');

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(async message => {
    const { mimetype, body, type, isGroupMsg, from, sender } = message;

    if (isGroupMsg === false && type === 'image') {
      await client.sendText(
        from,
        `${sender.pushname}, recebi sua imagem e já estou criando a figurinha 🥳`
      );

      try {
        const image = await jimp.read(Buffer.from(body, 'base64'))

        const resizedImage = image.resize(jimp.AUTO, 512).quality(90)

        resizedImage.getBuffer(resizedImage.getMIME(), async (err, res) => {
          let buff = Buffer(res);
          let base64data = buff.toString('base64');

          let asc = webp.str2webpstr(base64data, mimetype.split('/')[1], "-q 80");

          asc.then(async (result) => {
            await client.sendRawWebpAsSticker(
              from,
              result,
              false
            )
          });
        })
      } catch (error) {
        console.log(error)
      }
    }
  });
}
