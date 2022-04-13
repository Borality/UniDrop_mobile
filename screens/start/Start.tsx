import React, { useState, useEffect } from "react";
import { styles } from "./Start.styles";
import { TouchableOpacity, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { authentication } from "../../firebase/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function StartScreen({ navigation }: { navigation: any }) {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [error, setError] = useState("");
	const [isLoading,setIsLoading] = useState(false);
	const signOutUser = () => {
		signOut(authentication)
			.then(() => {
				// Sign-out successful.
				setIsSignedIn(false);
				setError("");
				//Use replace so user cannot go back with button
				navigation.replace("Login");
			})
			.catch((error) => {
				// An error happened.
				console.log(error.message);
				setError(error.message);
			});
	};
	
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Start Sharing</Text>
			<Button
				buttonStyle={styles.button}
				title="Next"
				onPress={() => navigation.navigate("RoomID")}
			/>
			<Button
					buttonStyle={styles.button}
					title="Sign out"
					onPress={signOutUser}
			/>
		</View>
	);
}
