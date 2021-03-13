import React from 'react';
import { useDropzone } from 'react-dropzone';

import * as S from './styles';

import fileImage from '../../../../assets/files.svg';

interface UploadFileProps {
  setImage(img: string): void;
}

const UploadFile: React.FC<UploadFileProps> = ({ setImage }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (files) => handleImage(files[0]),
  });

  const handleImage = (image: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setImage(reader.result.toString());
      }
    };

    reader.readAsDataURL(image);
  };

  return (
    <S.Container>
      <div id="dropzone" {...getRootProps()}>
        <input name="file" {...getInputProps()} />
        <img src={fileImage} width="150" />
        <h1>
          Arraste e solte imagens
          <br /> ou videos aqui
        </h1>
        <p>ou click para selecionar no seu computador</p>
      </div>
    </S.Container>
  );
};

export default UploadFile;
