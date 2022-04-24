import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import React, { useState, useEffect } from "react";
import { stylesMain } from "../../core-ui/components.styles";
import { io, Socket } from "socket.io-client";
import FileShare from "../../screens/FileShare/fileShare";
let socket: Socket;

export const JoinRoom = ({ navigation }: { navigation: any }) => {
	const [data, setData] = useState("No Result");
	const [value, setValue] = useState("");
	const [roomReady, setRoomReady] = useState(false);

	useEffect(() => {
		socket = io("https://limitless-tundra-34178.herokuapp.com/");
		socket.on("connect", () => {
			console.log("Hello from Join Room");
		});
		socket.on("in-room", () => {
			setRoomReady(true);
			console.log("In room");
		});
		socket.on("connect_error", (err) => {
			console.log(`connect_error due to ${err.message}`);
		});
		socket.on("both-in-room", () => {
			console.log("We should get same message");
		});
	}, []);

	const handleClick = (): void => {
		console.log(value);
		socket.emit("join-room", {
			roomId: value,
			socketId: socket.id,
			//Give information of platform used this is file sender btw
		});
	};

	return (
		<>
			{roomReady ? (
				<FileShare socket={socket} roomId={value} />
			) : (
				<View style={stylesMain.container}>
					<View style = {stylesMain.mainContainer}>
						<Text style={stylesMain.title}>Enter room id</Text>
                        <Input placeholder='Enter Room ID' onChangeText={value => setValue(value)}/>
						<Button
							style={stylesMain.button}
							onPress={handleClick}
							title="Join Room"
						/>
					</View>
				</View>
			)}
		</>
	);
};
