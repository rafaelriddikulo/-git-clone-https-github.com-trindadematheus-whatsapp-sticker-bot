import { Client, create, ev } from '@open-wa/wa-automate'
import { BrowserWindow } from 'electron'

import handleEvents from './app';

export default function startWaServer(mainWindow: BrowserWindow) {
  ev.on('qr.**', async (qrcode: string) => {
    const imageBuffer = Buffer.from(
      qrcode.replace('data:image/png;base64,', ''),
      'base64'
    );

    mainWindow.webContents.send('QR_CODE', imageBuffer)
  });

  ev.on('STARTUP.**', (data: any) => {
    mainWindow.webContents.send('STARTUP', data)
  });

  create({
    disableSpins: true,
    useStealth: true
  }).then((client: Client) => handleEvents(client, mainWindow))
}