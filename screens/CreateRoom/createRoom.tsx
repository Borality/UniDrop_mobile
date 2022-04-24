import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Room } from "../Room/room";
import uuid from "react-native-uuid";
import DeviceInfo from "react-native-device-info";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { stylesMain } from "../../core-ui/components.styles";

// const socket = io('http://localhost:4000');
const socket = io("https://limitless-tundra-34178.herokuapp.com/", {
	transports: ["websocket"],
});
export const CreateRoom = ({ navigation }: { navigation: any }) => {
	const [flag, setFlag] = useState(false);
	const [id, setId] = useState("");
	const [userConnected, setUserConnected] = useState(false);
	const [userWaiting, setUserWaiting] = useState(false);

	useEffect(() => {
		socket.on("connect", () => {
			console.log("Hello from create room");
		});
		socket.on("user-connected", () => {
			console.log("Did this work?");
			setUserConnected(true);
		});
		socket.on("connect_error", (err: any) => {
			console.log(`connect_error due to ${err.message}`);
		});
	}, []);

	function generateID(): any {
		return uuid.v4();
	}

	const handleClick = (): void => {
		setFlag(!flag);
		let generatedId = generateID();
		setId(generatedId);
		setUserWaiting(true);
		handleRoom(generatedId);
	};
	const handleRoom = (room: string) => {
		socket.emit("create-room", {
			roomId: room,
		});
	};

	// once handshake done
	return (
		<View style={{ height: "100%", width: "100%", display: "flex" }}>
			{userWaiting ? (
				<Room connected={userConnected} roomId={id} socket={socket} />
			) : (
				<View style={stylesMain.container}>
					<View style={stylesMain.mainContainer}>
						<Text style={stylesMain.title}>Share your files securely</Text>
						<Button
							style={stylesMain.button}
							onPress={handleClick}
							title="Create Room"
						/>
					</View>
				</View>
			)}
		</View>
	);
};
