import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor'
import InputRange from 'react-input-range'

import { useSocket } from '../../../hooks/socket';

import 'react-input-range/lib/css/index.css'

import * as S from './styles'

interface CropImageProps {
  image: string
  setImage(img: string): void
}

const CropImage: React.FC<CropImageProps> = ({ image, setImage }) => {
  const [zoom, setZoom] = useState(1.2)

  const { sendImage } = useSocket()

  const cropRef: any = useRef(null)

  const handleCut = () => {
    const image = cropRef.current.getImageScaledToCanvas().toDataURL()
    sendImage(image)
    setImage('')
  }

  const handleAddZoom = () => {
    if (zoom === 2) return;
    setZoom(zoom + 0.2)
  }

  const handleDecreaseZoom = () => {
    if (zoom === 1) return;
    setZoom(zoom - 0.2)
  }

  return (
    <S.Container>
      <h2>Recortar imagem</h2>
      <h3>Selecione a area que deseja ser a figurinha</h3>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
        <AvatarEditor
          ref={cropRef}
          image={image}
          width={320}
          height={320}
          border={50}
          color={[255, 255, 255, 0.6]}
          scale={zoom}
          rotate={0}
        />
      </div>

      <div id="row">
        <S.Controls>
          <span onClick={handleDecreaseZoom} >- zoom</span>
          <span onClick={handleAddZoom} >+ zoom</span>
        </S.Controls>

        <S.Button onClick={handleCut}>Cortar e enviar</S.Button>
      </div>
    </S.Container >
  );
}

export default CropImage;