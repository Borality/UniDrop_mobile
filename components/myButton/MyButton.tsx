import React from 'react'
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./MyButton.styles";
export default function MyButton({
	component,
	title,
	navigation,
}: {
	component: string;
	title: string;
	navigation: any;
}) {
  return (
	<TouchableOpacity
			style={styles.button}
			onPress={() => navigation.navigate(component)}
		>
			<Text style = {styles.buttonText} > {title} </Text>
	</TouchableOpacity> 
  )
}
