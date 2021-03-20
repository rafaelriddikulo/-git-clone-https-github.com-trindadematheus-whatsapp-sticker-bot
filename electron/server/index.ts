import { Client, create, ev } from '@open-wa/wa-automate'
import { BrowserWindow } from 'electron'
// @ts-ignore: Unreachable code error
import download from 'download-chromium'
import os from 'os'

const tmp = os.tmpdir();

import handleEvents from './app';

export default async function startWaServer(mainWindow: BrowserWindow) {
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

  const exec = await download({
    revision: 694644,
    installPath: `${tmp}/.local-chromium`
  })

  create({
    executablePath: exec,
    disableSpins: true,
    useStealth: true,
    skipUpdateCheck: true
  }).then((client: Client) => handleEvents(client, mainWindow))
}