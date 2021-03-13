import React, { useState } from 'react';
import { FaSlidersH, FaMobile, FaBookmark } from 'react-icons/fa';

import UploadFile from '../../components/HomeSections/UploadFile';
import WindowFrame from '../../components/WindowFrame';
import CropImage from '../../components/HomeSections/CropImage';

import { useWAConnect } from '../../hooks/wa-connect';

import * as S from './styles';

const Home: React.FC = () => {
  const [image, setImage] = useState('');

  const { user } = useWAConnect();

  return (
    <S.Container>
      <WindowFrame />

      <S.Menu>
        <img src={user.profile_url} />

        <div style={{ width: '100%' }}>
          <span>Olá,</span>
          <h2>{user.pushname}</h2>
        </div>

        <div style={{ width: '100%' }}>
          <S.MenuItem>
            <FaSlidersH />
            <span>{user.platform}</span>
          </S.MenuItem>

          <S.MenuItem>
            <FaMobile />
            <span>
              {user.phone.device_manufacturer} {user.phone.device_model}
            </span>
          </S.MenuItem>

          <S.MenuItem>
            <FaBookmark />
            <span>{user.me.user}</span>
          </S.MenuItem>
        </div>
      </S.Menu>

      <S.Body>
        {image === '' ? (
          <UploadFile setImage={setImage} />
        ) : (
          <CropImage image={image} setImage={setImage} />
        )}
      </S.Body>
    </S.Container>
  );
};

export default Home;
