import React from 'react';

import WindowFrame from '../../components/WindowFrame';
import { useWAConnect } from '../../hooks/wa-connect';

import * as S from './styles';

const Connect: React.FC = () => {
  const { qrCode } = useWAConnect();

  return (
    <S.Body>
      <WindowFrame />
      <S.Container>
        <div id="qrcode">
          {qrCode && (
            <img src={`data:image/png;base64,${qrCode}`} width="250" />
          )}
        </div>

        <div>
          <h1>Para usar o WhatsApp Sticker Bot</h1>

          <p>
            1. Abra o WhatsApp no seu celular
            <br />
            <br />
            2. Toque em Mais opções ou Ajustes e selecione WhatsApp Web
            <br />
            <br />
            3. Aponte seu celular para essa tela para capturar o código
          </p>
        </div>
      </S.Container>
    </S.Body>
  );
};

export default Connect;
