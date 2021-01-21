import React, { useState, createContext, useContext, useEffect } from 'react'
import io from 'socket.io-client'

import { arrayBufferToBase64 } from '../utils/buffertobase64'

interface SocketProviderProps {
  children: React.ReactNode
}

interface SocketContext {
  qrCode: string
  setQRCode(base64: string): void
}

const SocketContext = createContext<SocketContext | null>(null)

export function SocketProvider({ children }: SocketProviderProps) {
  const [qrCode, setQRCode] = useState('')

  useEffect(() => {
    const socketClient = io('http://localhost:3000/')

    socketClient.on('QR_CODE', (data: any) => {
      setQRCode(arrayBufferToBase64(data))
    })
  }, [])

  return (
    <SocketContext.Provider value={{ qrCode, setQRCode }}>
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
