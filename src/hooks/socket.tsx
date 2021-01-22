import React, { useState, createContext, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import io from 'socket.io-client'

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
}
interface SocketContext {
  qrCode: string
  user: User
  setUser(user: User): void
  setQRCode(base64: string): void
}

const SocketContext = createContext<SocketContext | null>(null)

export function SocketProvider({ children }: SocketProviderProps) {
  const [qrCode, setQRCode] = useState('')
  const [user, setUser] = useState({
    pushname: '',
    locale: '',
    status: '',
    platform: '',
    profile_url: ''
  })

  const history = useHistory()

  useEffect(() => {
    connect()
  }, [])

  function connect() {
    const socketClient = io('http://localhost:3000/')

    socketClient.on('QR_CODE', (data: any) => {
      setQRCode(arrayBufferToBase64(data))
      history.push("/connect")
    })

    socketClient.on('CONNECTED', (data: User) => {
      setUser(data)
      history.push("/home")
    })
  }

  return (
    <SocketContext.Provider value={{ user, setUser, qrCode, setQRCode }}>
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
