import React, { useState, createContext, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import io from 'socket.io-client'
import { toast } from 'react-toastify'

import { arrayBufferToBase64 } from '../utils/buffertobase64'

interface SocketProviderProps {
  children: React.ReactNode
}

interface User {
  pushname: string
  locale: string
  status: string
  platform: string
  profile_url: string
  phone: {
    device_manufacturer: string
    device_model: string
  }
  me: {
    user: string
  }
}
interface SocketContext {
  qrCode: string
  user: User
  setUser(user: User): void
  setQRCode(base64: string): void
  sendImage(file: string): void
}

const SocketContext = createContext<SocketContext | null>(null)

export function SocketProvider({ children }: SocketProviderProps) {
  const [qrCode, setQRCode] = useState('')
  const [socket, setSocket] = useState<SocketIOClient.Socket>(io)

  const [user, setUser] = useState({
    pushname: '',
    locale: '',
    status: '',
    platform: '',
    profile_url: '',
    phone: {
      device_manufacturer: '',
      device_model: ''
    },
    me: {
      user: ''
    }
  })

  const history = useHistory()

  useEffect(() => {
    connect()
  }, [])

  function connect() {
    const socketClient = io('http://localhost:3000/')

    setSocket(socketClient)

    socketClient.on('QR_CODE', (data: any) => {
      setQRCode(arrayBufferToBase64(data))
      history.push("/connect")
    })

    socketClient.on('CONNECTED', (data: User) => {
      setUser(data)
      history.push("/home")
    })
  }

  function sendImage(file: string) {
    socket.emit('CREATE_STICKER_UPLOAD', file)

    toast("Criando figurinha", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <SocketContext.Provider value={{ user, setUser, qrCode, setQRCode, sendImage }}>
      {children}
    </SocketContext.Provider>
  )
}

export function useSocket(): SocketContext {
  const context = useContext(SocketContext)

  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider')
  }

  return context
}
