import React, { useState } from 'react';

import UploadFile from '../../components/HomeSections/UploadFile';
import WindowFrame from '../../components/WindowFrame';
import CropImage from '../../components/HomeSections/CropImage';

import { useSocket } from '../../hooks/socket';

import * as S from './styles'

const Home: React.FC = () => {
  const [image, setImage] = useState('')

  const { user } = useSocket()

  return (
    <S.Container>
      <WindowFrame />

      <S.Menu>
        <img src={user.profile_url} />

        <div>
          <span>Olá,</span>
          <h2>{user.pushname}</h2>
        </div>
      </S.Menu>

      <S.Body>
        {image === '' ? <UploadFile setImage={setImage} /> : <CropImage image={image} setImage={setImage} />}
      </S.Body>
    </S.Container>
  );
}

export default Home;