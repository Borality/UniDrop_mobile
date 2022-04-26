import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import React, { useState, useEffect, useCallback } from "react";
import { Socket } from "socket.io-client";
import { stylesMain } from "../../core-ui/components.styles";
import { MetaData } from "../../types";
import * as ImagePicker from "expo-image-picker";
import { decode } from "base64-arraybuffer";

type FileShareProps = {
	socket: Socket;
	roomId?: string;
};

const FileShare = ({ socket, roomId }: FileShareProps) => {
	const [files, setFiles] = useState<File[]>([]);
	const [progress, setProgress] = useState<number>();
	const [image, setImage] = useState<any | null>(null);
	const [metaType, setMetaType] = useState<any | null>(null);
	const [base64String, setBase64String] = useState<any | null>("test");
	const [fileCount, setFileCount] = useState(1);
	//For picking image and displaying later with image as uri
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
			base64: true,
		});
		console.log(result);
		if (!result.cancelled) {
			setImage(result.uri);
			setBase64String(result.base64);
			setMetaType(result.type);
			setFileCount(fileCount + 1);
			if (result.type == "image") {
				console.log("image");
			}
			//Code for video only on ios
			else if (result.type == "video") {
				console.log("video");
			}
			// const metaData: MetaData = {
			// 	fileName: result.uri,
			// 	fileType: "jpg",
			// 	fileSize: 10,
			// 	roomId: roomId,
			// };
			// socket.emit("file-ready", arrayBuffer, metaData);
			const metaData: MetaData = {
				fileName: `file${fileCount}.jpg`,
				fileType: "image",
				fileSize: 100,
				roomId: roomId,
			};
			const arrayBuffer = decode(result.base64!);
			socket.emit("file-ready", arrayBuffer, metaData);
		}
	};

	
	return (
		<View style={stylesMain.container}>
			<View style={stylesMain.mainContainer}>
				<Text style={stylesMain.title}>Add files</Text>
				<Text> </Text>
				{/* <Text style={stylesMain.text}>{image}</Text> */}
				<Button style = {stylesMain.button} title="Add media" onPress={pickImage} />
				<Image source = {{uri: image}} style = {{width: "100%", height: "50%"}}/>
			</View>
		</View>
	);
};

export default FileShare;
