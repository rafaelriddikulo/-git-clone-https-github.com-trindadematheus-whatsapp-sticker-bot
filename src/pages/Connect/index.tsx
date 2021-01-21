import React from 'react';
const remote = require('electron').remote;

import logoImage from '../../../assets/logo.png'
import { useSocket } from '../../hooks/socket';

import * as S from './styles'

const Connect: React.FC = () => {
  const { qrCode } = useSocket()

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