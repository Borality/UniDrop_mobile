import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./InsertFiles.styles";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-elements";
//Firebase
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import { db, authentication } from "../../firebase/firebase-config";
import { doc, setDoc, updateDoc} from "firebase/firestore/lite";

export default function Page7({ navigation, route }: { navigation: any, route: any}) {
	//Stores image for view
	const [image, setImage] = useState<any | null>(null);
	//Setting mediaType
	const [mediaType, setMediaType] = useState<any | null>(null);
	const [user, setUser] = useState("");
	const [path, setPath] = useState("");
	const { roomNumber } = route.params;
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(authentication, (user: any) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				// ...
				//Use replace so user cannot go back with button
				setUser(user.uid);
			}
		});
		return unsubscribe;
	}, []);

	const nextAndsetData = async () => {
		const ref = doc(db, "users",`${roomNumber}`);
		await updateDoc(ref, { 
		  picturePath: path,
		})
		navigation.navigate("page8", {pathName: path})
	}

	//For picking image and displaying later with image as uri
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);
		var metadataVideo = {
			contentType: "video/quicktime",
			contentDisposition: "",
		};
		if (!result.cancelled) {
			setImage(result.uri);
			const storage = getStorage();
			const storageRef = ref(storage, "files/" + user + "/" + roomNumber);
			//Used for next screen
			await setPath("files/" + user + "/" + roomNumber);
			const img = await fetch(result.uri);
			const bytes = await img.blob();
			//Code for images only
			if (result.type == "image") {
				uploadBytesResumable(storageRef, bytes);
				console.log("image");
			}
			//Code for video only
			else if (result.type == "video") {
				uploadBytesResumable(storageRef, bytes, metadataVideo);
				console.log("video");
			}
		}
	};
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Insert files: {roomNumber}</Text>

				<Button
					buttonStyle={styles.button}
					title="Choose Photo"
					onPress={pickImage}
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						buttonStyle={styles.button}
						title="Next"
						onPress={nextAndsetData}
					/>
				</View>
			</View>
		</View>
	);
}
