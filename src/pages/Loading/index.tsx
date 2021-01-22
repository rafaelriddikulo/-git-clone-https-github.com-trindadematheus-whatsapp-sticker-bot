import React from 'react';

import WindowFrame from '../../components/WindowFrame';
import logoImage from '../../../assets/logo.png'

import * as S from './styles'

const Loading: React.FC = () => {
  return (
    <S.Body>
      <WindowFrame />
      <S.Container>
        <img src={logoImage} width="200" />

        <div className="dotsLoading">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </S.Container>
    </S.Body>
  );
}

export default Loading;