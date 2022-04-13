import React, { useState, useEffect } from "react";
import {stylesMain} from "../../components/components.styles";
import { styles } from "./Start.styles";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { authentication } from "../../firebase/firebase-config";
import { signOut } from "firebase/auth";

export default function StartScreen({ navigation }: { navigation: any }) {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [error, setError] = useState("");

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
		<View style={stylesMain.container}>
			<View style={stylesMain.mainContainer}>
				<Text style={stylesMain.title}>Start Sharing</Text>
				<Button
					buttonStyle={stylesMain.button}
					title="Next"
					onPress={() => navigation.navigate("RoomID")}
				/>
				<Button
					buttonStyle={stylesMain.button}
					title="Sign out"
					onPress={signOutUser}
				/>
			</View>
		</View>
	);
}
