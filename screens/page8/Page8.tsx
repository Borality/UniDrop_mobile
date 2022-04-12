import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Page8.styles";
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
		const some = async () => {
			const docRef = doc(db, "users", "216609360982");
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				console.log("Document data:", docSnap.data());
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		};
		some();
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.containerMain}>
				<Text style={styles.title}>Review files {user}</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						buttonStyle={styles.button}
						title="Next"
						onPress={() => navigation.navigate("page8")}
					/>
				</View>

				<Image style={{ width: "50%", height: "50%" }} source={{ uri: url }} />
			</View>
		</View>
	);
}
