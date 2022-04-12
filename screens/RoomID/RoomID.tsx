import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./RoomID.styles";
import {
	onAuthStateChanged,
} from "firebase/auth";
//firebase
import { db, authentication } from "../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore/lite";
import { AntDesign } from "@expo/vector-icons";

export default function RoomID({ navigation }: { navigation: any }) {
	// const [IDnumber,setIDnumber] = useState<any | null>(null);
	// const initiate = () => {
	//   navigation.navigate("yourRoo mID", {
	//     IDnumber: "test",
	//   });
	// };
	const [roomID, setRoomID] = useState<any | null>(null);
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

	const setData = async () => {
		const ref = doc(db, "users",`${roomID}`);
		await setDoc(ref, {
			roomNumber: roomID,
			userID: user,
		});
	};
	const makeID = () => {
		setRoomID(Math.floor(Math.random() * Date.now()));
	};

	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<Text style={styles.title}>RoomID</Text>
				<Button style={{ marginTop: 5 }} title="Make ID" onPress={makeID} />
				<Button
					style={{ marginTop: 5 }}
					title="Upload data"
					onPress={setData}
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						buttonStyle={styles.button}
						title="Next"
						onPress={() => navigation.navigate("page7", {roomNumber: roomID})}
					/>
				</View>
			</View>
      
		</View>
	);
}
