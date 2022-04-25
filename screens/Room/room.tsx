import React, { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { Button } from "react-native-elements";
import { stylesMain } from "../../core-ui/components.styles";
import { ShareRoomCard } from "../../components/shareRoomCard";
import { encode } from "base64-arraybuffer";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { MetaData } from "../../types";

var ab2str = require("arraybuffer-to-string");

type RoomProps = {
	connected: boolean;
	roomId: string;
	socket: Socket;
};

export interface incomingFiles extends MetaData {
	fileUrl: string;
}

export const Room = ({ connected, roomId, socket }: RoomProps) => {
	const [base64String, setBase64String] = useState("");
	const [metaName, setMetaName] = useState("");
	const [metaType, setMetaType] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		socket.on("file-received", (data: ArrayBuffer, metaData: MetaData) => {
			setBase64String(encode(data));
			const file: incomingFiles = {
				fileName: metaData.fileName,
				fileType: metaData.fileType,
				fileSize: metaData.fileSize,
				fileUrl: `data:image/png;base64,${base64String}`,
			};
			setMetaName(file.fileName);
			setMetaType(file.fileType);
			setLoading(true);
		});
	}, []);

	function getFileUri(name: string) {
		//Specify type here like jpeg, png, etc. Will add more types
		//Instead just use metaName since it has full file name with extension like picture.jpeg
		return FileSystem.documentDirectory + `${encodeURI(metaName)}`;
	}

	const shareFile = async () => {
		const fileUri = getFileUri("test");
		await FileSystem.writeAsStringAsync(fileUri, base64String, {
			encoding: FileSystem.EncodingType.Base64,
		});
		Sharing.shareAsync(fileUri);
	};

	return (
		<>
			{connected ? (
				<View style={stylesMain.container}>
					<View style={stylesMain.mainContainer}>
						<Text style={stylesMain.title}>Download your file</Text>
						{loading ? (
							<Text style={stylesMain.text}>{metaName}</Text>
						) : (
							<ActivityIndicator size="large" />
						)}

						{/* <Image
							style={{ width: "100%", height: "60%" }}
							source={{ uri: `data:image/png;base64,${base64String}` }}
						/> */}
						<Button
							style={stylesMain.button}
							onPress={shareFile}
							title="Download"
						/>
					</View>
				</View>
			) : (
				<ShareRoomCard roomId={roomId} />
			)}
		</>
	);
};
