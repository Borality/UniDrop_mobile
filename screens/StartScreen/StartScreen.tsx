import * as React from "react";
import { styles } from "./StartScreen.styles";
import { TouchableOpacity, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default function StartScreen({ navigation }: { navigation: any }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>StartScreen</Text>
			<Button
				buttonStyle={styles.button}
				title="Last page"
				onPress={() => navigation.goBack()}
			/>
			<Button
				buttonStyle={styles.button}
				title="Start page"
				onPress={() => navigation.navigate("roomID")}
			/>
			<Button
				buttonStyle={styles.button}
				title="Join page"
				onPress={() => navigation.navigate("roomID")}
			/>
		</View>
	);
}
