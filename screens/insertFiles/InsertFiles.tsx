import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Button,
	Image,
} from "react-native";
import { styles } from "./InsertFiles.styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

export default function page7({ navigation }: { navigation: any }) {
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
					title="Chose photo"
					color="#6495ed"
					onPress={pickImage}
				></Button>
				<View style={styles.content}>
					<TouchableOpacity key={1} onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						title="Next"
						color="#6495ed"
						onPress={() => navigation.navigate("page8")}
					/>
				</View>
				{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
			</View>
		</View>
	);
}
