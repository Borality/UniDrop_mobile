import * as React from "react";
import { styles } from "./SendFiles.styles";
import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const MyButton = ({
	page,
	title,
	navigation,
}: {
	page: string;
	title: string;
	navigation: any;
}) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => navigation.navigate(page)}
		>
			<Text style = {styles.buttonText} > {title} </Text>
		</TouchableOpacity>
	);
};

export default function TabOneScreen({ navigation }: { navigation: any }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Choose an option:</Text>
			<View style={styles.buttonContainer}>
				<MyButton title = "Send text to device" page = "page5" navigation = {navigation}/>
                <MyButton title = "Send files to device" page = "page7" navigation = {navigation}/>
			</View>
			<TouchableOpacity key={1} onPress={() => navigation.goBack()}>
				<AntDesign name="back" size={50} />
			</TouchableOpacity>
		</View>
	);
}
