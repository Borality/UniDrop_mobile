import React, { useState} from "react";
import { styles } from "./AddMedia.styles";
//Expo
import * as ImagePicker from "expo-image-picker";
//Components
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
//Icons
import { AntDesign } from "@expo/vector-icons";
//Firebase
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { db } from "../../firebase/firebase-config";
import { doc, updateDoc} from "firebase/firestore";
import getUser from "../../firebase/getUser";

export default function AddMedia({ navigation, route }: { navigation: any, route: any}) {
	//Stores image for view
	const [image, setImage] = useState<any | null>(null);
	//Url path
	const [path, setPath] = useState("");
	//Previous page room number
	const { roomNumber } = route.params;
	//User id
	const {user} = getUser();

	const nextAndSetData = async () => {
		const ref = doc(db, "users",`${roomNumber}`);
		await updateDoc(ref, { 
		  picturePath: path,
		})
		navigation.navigate("ShowMedia", {pathName: path})
	}

	//For picking image and displaying later with image as uri
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);
		//Media type for iphone video
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
			//Code for video only on ios
			else if (result.type == "video") {
				uploadBytesResumable(storageRef, bytes, metadataVideo);
				console.log("video");
			}
		}
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Insert files</Text>
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
						onPress={nextAndSetData}
					/>
				</View>
			</View>
		</View>
	);
}
