import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./InsertFiles.styles";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-elements";

export default function Page7({ navigation }: { navigation: any }) {
	const [image, setImage] = useState<any | null>(null);
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

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Insert files:</Text>
				<Button
						buttonStyle={styles.button}
						title="Choose Photo"
						onPress={pickImage}
					/>
				<View style={styles.content}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						buttonStyle={styles.button}
						title="Next"
						onPress={() => navigation.navigate("page8")}
					/>
				</View>
				{image && (
					<Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
				)}
			</View>
		</View>
	);
}
