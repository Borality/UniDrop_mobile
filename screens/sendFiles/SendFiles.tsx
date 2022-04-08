import * as React from "react";
import { styles } from "./SendFiles.styles";
import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";


export default function Page4({ navigation }: { navigation: any }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Choose an option:</Text>
			<View style={styles.buttonContainer}>
				<Button
							buttonStyle={styles.button}
							title="Send text to device"
							onPress={() => navigation.navigate("page4")}
						/>
				<Button
							buttonStyle={styles.button}
							title="Send files to device"
							onPress={() => navigation.navigate("page7")}
						/>

			</View>
			<TouchableOpacity key={1} onPress={() => navigation.goBack()}>
				<AntDesign name="back" size={50} />
			</TouchableOpacity>
		</View>
	);
}
