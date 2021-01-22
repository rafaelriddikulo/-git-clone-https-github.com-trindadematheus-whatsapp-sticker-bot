import React from 'react';
import UploadFile from '../../components/HomeSections/UploadFile';
import WindowFrame from '../../components/WindowFrame';

import * as S from './styles'

const im = 'https://conteudo.imguol.com.br/c/parceiros/e6/2021/01/13/neymar-foto-reproducaofox-sports-1610585917563_v2_450x337.jpg'

const Home: React.FC = () => {
  return (
    <S.Container>
      <WindowFrame />

      <S.Menu>
        <img src={im} />

        <div>
          <span>Olá,</span>
          <h2>Matheus Trindade</h2>
        </div>
      </S.Menu>

      <S.Body>
        <UploadFile />
      </S.Body>
    </S.Container>
  );
}

export default Home;