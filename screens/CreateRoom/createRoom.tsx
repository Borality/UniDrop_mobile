import { useState, MouseEvent, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Room } from '../Room';
import uuid  from 'react-native-uuid';
import DeviceInfo from "react-native-device-info";
import { CreateRoomCard } from '../../components/CreateRoomCard';
import {View} from "react-native";

// const socket = io('http://localhost:4000');
const socket = io('http://localhost:4000', {
  transports: ["websocket"],
});
export const CreateRoom = () => {
  const [flag, setFlag] = useState(false);  
  const [id, setId] = useState('');
  const [userConnected, setUserConnected] = useState(false);
  const [userWaiting, setUserWaiting] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Hello from create room')
    })
    socket.on("user-connected", () => {
      console.log('Did this work?')
      setUserConnected(true);
    })
    socket.on("connect_error", (err: any) => {
      console.log(`connect_error due to ${err.message}`);
    })
  }, []);

  function generateID(): any {
    return uuid.v4();
  }

  const handleClick = (event: MouseEvent): void => {
    setFlag(!flag);
    let generatedId = generateID();
    setId(generatedId);
    setUserWaiting(true);
    handleRoom(generatedId);
  }
  const handleRoom = (room: string) => {
    socket.emit('create-room', {
      roomId: room,
    })
  }
  
  // once handshake done 
  return (
    <View style={{height: '100%', width: '100%', display:'flex'}}>
      {userWaiting ? <Room connected={userConnected} roomId={id} socket={socket}/> : 
        <CreateRoomCard onClick={handleClick} />
      }
    </View>
  )
}
