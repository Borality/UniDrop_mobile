import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import {stylesMain} from "../../core-ui/components.styles";
import { styles } from "./login-styles";
import { Input, Button } from "react-native-elements";
//Firebase
import { authentication } from "../../firebase/firebase-config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";

const Login = ({ navigation }: { navigation: any }) => {
	//If user logged in then go to next page
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(authentication, (user: any) => {
			if (user) {
				//User is signed in, see docs for a list of available properties
				//Use replace so user cannot go back with button
				navigation.replace("Start");
			}
		});
		return unsubscribe;
	}, []);

	const [isSignedIn, setIsSignedIn] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const registerUser = () => {
		createUserWithEmailAndPassword(authentication, email, password)
			.then((userCredential) => {
				// Signed in
				setIsSignedIn(true);
				console.log("User signed in");
				setError("");
				// ...
			})
			.catch((error) => {
				console.log(error.message);
				setError(error.message);
				// ..
			});
	};

	const signInUser = () => {
		signInWithEmailAndPassword(authentication, email, password)
			.then((userCredential) => {
				// Signed in
				setIsSignedIn(true);
				console.log("User signed in");
				setError("");
				// ...
			})
			.catch((error) => {
				console.log(error.message);
				setError(error.message);
			});
	};

	return (
		<View style={stylesMain.container}>
			<View style={stylesMain.mainContainer}>
				<Input
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					value={password}
					secureTextEntry={true}
					onChangeText={(text) => setPassword(text)}
				/>
				<Button
					buttonStyle={stylesMain.button}
					title="Register"
					onPress={registerUser}
				/>
				<Button buttonStyle = {stylesMain.button} title="Sign in" onPress={signInUser} />
				<Text>{error}</Text>
			</View>
		</View>
	);
};

export default Login;
