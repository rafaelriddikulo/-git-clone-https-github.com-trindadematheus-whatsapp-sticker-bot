import React, { useState, useEffect } from 'react';
const remote = require('electron').remote;
import io from 'socket.io-client'

import logoImage from '../../../assets/logo.png'

import * as S from './styles'

const Connect: React.FC = () => {
  const [qrCode, setQRCode] = useState('')

  useEffect(() => {
    const socketClient = io('http://localhost:3000/');

    socketClient.on('QR_CODE', (data: any) => {
      setQRCode(arrayBufferToBase64(data))
    });
  }, [])

  function arrayBufferToBase64(buffer: ArrayBuffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  }

  const handleClose = () => {
    remote.getCurrentWindow().close()
  }

  return (
    <>
      <S.Container>
        <div id="menu">
          <div>
            {qrCode !== '' && <img src={logoImage} />}
            <h1>WhatsApp Sticker Bot</h1>
          </div>

          <h2 onClick={handleClose} >X</h2>
        </div>

        {qrCode ? (
          <div id="qrcode" >
            <img src={`data:image/png;base64,${qrCode}`} />
          </div>
        ) : (
            <img src={logoImage} width="230" height="230" />
          )}

        <S.InfoSec>
          {qrCode ? (
            <>
              <h1>Para usar o Whatsapp Sticker Bot</h1>
              <p>
                1. Abra o WhatsApp no seu celular
                <br /><br />
                2. Toque em <b>Mais opções</b> ou <b>Ajustes</b> e selecione
                WhatsApp Web
                <br /><br />
                3. Aponte seu celular para essa tela para capturar o código
              </p>
            </>
          ) : (
              <h1>Inicializando</h1>
            )}
        </S.InfoSec>
      </S.Container>
    </>
  );
}

export default Connect;