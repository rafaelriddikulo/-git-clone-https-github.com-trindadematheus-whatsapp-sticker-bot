import React from 'react';
import { useDropzone } from 'react-dropzone'

import * as S from './styles'

import fileImage from '../../../../assets/files.svg'

const UploadFile: React.FC = () => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: 'image/*' });

  return (
    <S.Container>
      <div id="dropzone" {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <img src={fileImage} width="150" />
        <h1>Arraste e solte imagens<br /> ou videos aqui</h1>
        <p>ou click para selecionar no seu computador</p>
      </div>
    </S.Container>
  );
}

export default UploadFile;