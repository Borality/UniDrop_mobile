import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./Login-styles";
import { Input, Button } from "react-native-elements";
//Firebase
import { authentication } from "../../firebase/firebase-config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Login = ({navigation}: {navigation: any}) => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const registerUser = () => {
		createUserWithEmailAndPassword(authentication, email, password)
			.then((userCredential) => {
				// Signed in
        setIsSignedIn(true);
				console.log(userCredential.user);
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
				console.log(userCredential.user);
        setError("");
				// ...
			})
			.catch((error) => {
				console.log(error.message);
				setError(error.message);
			});
	};

  const signOutUser = () => {
    signOut(authentication).then(() => {
      // Sign-out successful.
      setIsSignedIn(false);
      setError("");
    }).catch((error) => {
      // An error happened.
      console.log(error.message);
			setError(error.message);
    });
  }

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
				<Button style = {{marginTop: 5}} title="Register" onPress={registerUser} />
				{isSignedIn == true ? (
					<Button style = {{marginTop: 5}} title="Sign out" onPress={signOutUser} />
				) : (
					<Button style = {{marginTop: 5}} title="Sign in" onPress={signInUser} />
				)}
				<Text>{error}</Text>
        <Button title = "Back" onPress = {() => navigation.goBack()}/>
			</View>
		</View>
	);
};

export default Login;
