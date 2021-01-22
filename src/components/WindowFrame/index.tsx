import React from 'react';
const remote = require('electron').remote;

import * as S from './styles'

const WindowFrame: React.FC = () => {

  const handleClose = () => {
    remote.getCurrentWindow().close()
  }

  return (
    <S.Container>
      <span onClick={handleClose} >X</span>
    </S.Container>
  );
}

export default WindowFrame;