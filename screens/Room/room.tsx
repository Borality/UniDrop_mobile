import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { View, Text, Image } from "react-native";
import {Button} from "react-native-elements";
import { stylesMain } from "../../core-ui/components.styles";
import { ShareRoomCard } from "../../components/shareRoomCard";
import { encode } from "base64-arraybuffer";
import * as Sharing from "expo-sharing";
import * as FileSystem from 'expo-file-system';

var ab2str = require("arraybuffer-to-string");

type RoomProps = {
	connected: boolean;
	roomId: string;
	socket: Socket;
};

function arrayBufferToBase64(buffer: any) {
	let binary = "";
	let bytes = new Uint8Array(buffer);
	let len = bytes.byteLength;
	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
}

export const Room = ({ connected, roomId, socket }: RoomProps) => {
	const [base64String, setBase64String] = useState("");
	useEffect(() => {
		socket.on("file-received", (data: ArrayBuffer, metaData: any) => {
			setBase64String(encode(data));
		});
	}, []);


	const shareFile = async () => {
		const downloadPath = FileSystem.cacheDirectory + 'fileName.jpg';
		const { uri: localUrl } = await FileSystem.downloadAsync(`data:image/png;base64,${base64String}`, downloadPath);
		Sharing.shareAsync(localUrl);
	}

	return (
		<>
			{connected ? (
				<View style={stylesMain.container}>
					<View style={stylesMain.mainContainer}>
						<Text style={stylesMain.text}>Welcome to room!</Text>
						<Image
							style={{ width: "100%", height: "60%" }}
							source={{ uri: `data:image/png;base64,${base64String}` }}
						/>
						<Button onPress = {shareFile} title = "Download"/>
					</View>
				</View>
			) : (
				<ShareRoomCard roomId={roomId} />
			)}
		</>
	);
};
