import React, { useState, createContext, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ipcRenderer } from 'electron';

import { arrayBufferToBase64 } from '../utils/buffertobase64';

interface WAConnectProviderProps {
  children: React.ReactNode;
}

interface User {
  pushname: string;
  locale: string;
  status: string;
  platform: string;
  profile_url: string;
  phone: {
    device_manufacturer: string;
    device_model: string;
  };
  me: {
    user: string;
  };
}
interface WAConnectContext {
  qrCode: string;
  user: User;
  startupText: string;
  setStartupText(feedback: string): void;
  setUser(user: User): void;
  setQRCode(base64: string): void;
  sendImage(file: string): void;
}

const WAConnectContext = createContext<WAConnectContext | null>(null);

export function WAConnectProvider({ children }: WAConnectProviderProps) {
  const [qrCode, setQRCode] = useState('');
  const [startupText, setStartupText] = useState('');

  const [user, setUser] = useState({
    pushname: '',
    locale: '',
    status: '',
    platform: '',
    profile_url: '',
    phone: {
      device_manufacturer: '',
      device_model: '',
    },
    me: {
      user: '',
    },
  });

  const history = useHistory();

  useEffect(() => {
    connect();
    ipcRenderer.send('START_WA');
    setStartupText('Starting WhatsApp Connection');
  }, []);

  function connect() {
    ipcRenderer.on('QR_CODE', (event, data: any) => {
      setQRCode(arrayBufferToBase64(data));
      history.push('/connect');
    });

    ipcRenderer.on('STARTUP', (event, data: any) => {
      setStartupText(data);

      if (data === 'Reinjecting api') {
        history.push('/');
      }
    });

    ipcRenderer.on('CONNECTED', (event, data: User) => {
      setUser(data);
      history.push('/home');
    });
  }

  function sendImage(file: string) {
    ipcRenderer.send('CREATE_STICKER_UPLOAD', file);

    toast('Criando figurinha', {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <WAConnectContext.Provider
      value={{
        user,
        setUser,
        qrCode,
        setQRCode,
        sendImage,
        startupText,
        setStartupText,
      }}
    >
      {children}
    </WAConnectContext.Provider>
  );
}

export function useWAConnect(): WAConnectContext {
  const context = useContext(WAConnectContext);

  if (!context) {
    throw new Error('useWAConnect must be used within a WAConnectProvider');
  }

  return context;
}
