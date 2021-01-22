import React from 'react';
import { useDropzone } from 'react-dropzone'

import * as S from './styles'

import fileImage from '../../../../assets/files.svg'
import { useSocket } from '../../../hooks/socket';

const UploadFile: React.FC = () => {
  const { sendImage } = useSocket()

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: 'image/*',
    onDrop: files => sendImage(files[0])
  });

  return (
    <S.Container>
      <div id="dropzone" {...getRootProps()}>
        <input name="file" {...getInputProps()} />
        <img src={fileImage} width="150" />
        <h1>Arraste e solte imagens<br /> ou videos aqui</h1>
        <p>ou click para selecionar no seu computador</p>
      </div>
    </S.Container>
  );
}

export default UploadFile;