import React, { useState, useEffect } from "react";
import { styles } from "./TabOneScreen.styles";

//Components
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
//Firebase
import { authentication } from "../../firebase/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import FormSuccess from '../../components/FormSuccess';

export default function TabOneScreen({ navigation }: { navigation: any }) {
	//Add buttons here and it will auto create the buttons
	const Data = [
		{
			title: "Page 1",
			component: "startScreen",
			navigation: navigation,
			key: 1,
		},
		{ title: "Page 2", component: "roomID", navigation: navigation, key: 2 },
		{
			title: "Page 3",
			component: "yourRoomID",
			navigation: navigation,
			key: 3,
		},
		{ title: "Page 4", component: "page4", navigation: navigation, key: 4 },
		{ title: "Page 5", component: "page5", navigation: navigation, key: 5 },
		{ title: "Page 6", component: "page6", navigation: navigation, key: 6 },
		{ title: "Page 7", component: "page7", navigation: navigation, key: 7 },
		{ title: "Page 8", component: "page8", navigation: navigation, key: 8 },
		{ title: "Page 9", component: "page9", navigation: navigation, key: 9 },
	];
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [error, setError] = useState("");
	const [isLoading,setIsLoading] = useState(false);
	//Checks if user is signed in
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(authentication, (user: any) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				setIsSignedIn(true);
			} else {
				// User is signed out
				setIsSignedIn(false);
			}
		});
		return unsubscribe;
	}, []);

	const signOutUser = () => {
		signOut(authentication)
			.then(() => {
				// Sign-out successful.
				setIsSignedIn(false);
				setError("");
				//Use replace so user cannot go back with button
				navigation.replace("login");
			})
			.catch((error) => {
				// An error happened.
				console.log(error.message);
				setError(error.message);
			});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>UniDrop</Text>
			<View style={styles.buttonContainer}>
				{isSignedIn == true &&
					Data.map((data: any) => {
						return (
							<Button
								buttonStyle={styles.button}
								title={data.title}
								onPress={() => navigation.navigate(data.component)}
								key={data.key}
							/>
						);
					})}
				<Button
					buttonStyle={styles.button}
					title="Sign out"
					onPress={signOutUser}
				/>
			</View>
			{isLoading == true?
				<FormSuccess/>
				:
				null
			}
		</View>
	);
}
