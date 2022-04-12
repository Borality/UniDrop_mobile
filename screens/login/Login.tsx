import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./Login-styles";
import { Input, Button } from "react-native-elements";
//Firebase
import { authentication } from "../../firebase/firebase-config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import FormSuccess from '../../components/FormSuccess';




const Login = ({ navigation }: { navigation: any }) => {
	//If user logged in then go to next page
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(authentication, (user: any) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				// ...
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
	const [isLoading,setIsLoading] = useState(false);

	const registerUser = () => {
		setIsLoading(true);
		createUserWithEmailAndPassword(authentication, email, password)
			.then((userCredential) => {
				// Signed in
				setIsSignedIn(true);
				console.log("User signed in");
				setIsLoading(false);
				setError("");
				// ...
			})
			.catch((error) => {
				console.log(error.message);
				setIsLoading(false);
				setError(error.message);
				// ..
			});
	};

	const signInUser = () => {
		setIsLoading(true);
		signInWithEmailAndPassword(authentication, email, password)
			.then((userCredential) => {
				// Signed in
				setIsSignedIn(true);
				console.log("User signed in");
				setIsLoading(false);
				setError("");
				// ...
			})
			.catch((error) => {
				console.log(error.message);
				setIsLoading(false);
				setError(error.message);
			});
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
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
					style={{ marginTop: 5 }}
					title="Register"
					onPress={registerUser}
				/>
				<Button style={{ marginTop: 5 }} title="Sign in" onPress={signInUser} />
				<Text>{error}</Text>
			</View>

			{isLoading == true?
				<FormSuccess/>
				:
				null
			}
		</View>
	);
};

export default Login;
