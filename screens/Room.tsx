import React, { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import {View, Text} from "react-native"
type RoomProps = {
  connected: boolean,
  roomId: string,
  socket: Socket
}

export const Room = ({ connected, roomId, socket }: RoomProps) => {
  useEffect(() => {
    socket.on('file-received', (data: ArrayBuffer, metaData: any) => {
      let buffer = []
      buffer.push(data)
      let link = document.createElement('a');
      link.download = metaData.fileName;
      const blob = new Blob(buffer, {type: metaData.fileType})
      const reader = new FileReader();
      reader.readAsDataURL(blob)
      reader.onload = () => {
        link.href = reader.result as string;
        link.click()
      }
    })
  },[])
  return (
    <>
      {connected ? 
        <Text>Welcome to room!</Text> :
        <Text>Share this room id: {roomId}</Text>
      }
    </>
    
  )
}
