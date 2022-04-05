import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from "./Page7.styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

export default function page7({ navigation }: { navigation: any }) {
	const [image, setImage] = useState<any | null>(null);

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
			<View style={styles.content}>
				<Text style={styles.title}>Insert files:</Text>
				<Button
					title="Chose photo"
					color="#6495ed"
					onPress={pickImage}
				></Button>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity key={1} onPress={() => navigation.goBack()}>
					<AntDesign name="back" size={50} />
				</TouchableOpacity>
				<Button
					title="Next"
					color="#6495ed"
					onPress={() => navigation.navigate("page6")}
				>
					<Text style={styles.button}>Next</Text>
				</Button>
			</View>
		</View>
	);
}
