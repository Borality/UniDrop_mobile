import React from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from "./SendText.styles";
import { AntDesign } from "@expo/vector-icons";
export default function page5({ navigation }: { navigation: any }) {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Enter text to send:</Text>
				<TextInput
					style={styles.textInput}
					multiline
					numberOfLines={4}
				></TextInput>
				<View style={styles.content}>
					<TouchableOpacity key={1} onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						title="Next"
						color="#6495ed"
						onPress={() => navigation.navigate("page7")}
					/>
				</View>
			</View>
		</View>
	);
}
