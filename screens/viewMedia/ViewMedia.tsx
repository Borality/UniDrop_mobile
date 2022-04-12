import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./ViewMedia.styles";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
	collectionGroup,
	query,
	where,
	getDoc,
	doc,
	collection,
} from "firebase/firestore";
import { db, authentication } from "../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function Page8({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) {
	const [user, setUser] = useState("");
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(authentication, (user: any) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				// ...
				//Use replace so user cannot go back with button
				setUser(user.uid);
			}
		});
		return unsubscribe;
	}, []);

	const { pathName } = route.params;
	//Will store url
	const [url, setUrl] = useState<any | null>(null);
	const [users, setUsers] = useState<any | null>(null);
	
	useEffect(() => {
		const func = async () => {
			const storage = getStorage();
			const reference = ref(storage, pathName);
			await getDownloadURL(reference).then((x) => {
				setUrl(x);
			})
		};
		if (url == undefined) {func()};
	}, []);


	return (
		<View style={styles.container}>
			<View style={styles.containerMain}>
				<Text style={styles.title}>Review files</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						buttonStyle={styles.button}
						title="Next"
						onPress={() => navigation.navigate("Start")}
					/>
				</View>
				<View style = {{marginVertical: 10, width: "100%", height: "50%" }}>
				<Image style={{ width: "100%", height: "100%" }} source={{ uri: url }} />
				</View>
			</View>
		</View>
	);
}
