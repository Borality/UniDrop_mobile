import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./Page5.styles";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function page5({ navigation }: { navigation: any }) {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Enter text to send:</Text>
				<TextInput
					style={styles.textInput}
					multiline
					numberOfLines={4}
				></TextInput>
			</View>
			<View style = {styles.buttons}>
			<TouchableOpacity key={1} onPress={() => navigation.goBack()}>
				<AntDesign name = "back" size = {50}/>
			</TouchableOpacity>
			<TouchableOpacity key={1} onPress={() => navigation.navigate("page6")}>
				<Text style={styles.button}>Next</Text>
			</TouchableOpacity>
			</View>
		</View>
	);
}
