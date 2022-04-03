import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./Page5.styles";

export default function page5() {
	return (
		<View style={styles.container}>
      <View style = {styles.content}>
			<Text style={styles.title}>Enter text to send:</Text>
			<TextInput style = {styles.textInput} multiline numberOfLines={4}></TextInput>
      </View>
    </View>
	);
}
