import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./RoomID.styles";
//firebase
import { onAuthStateChanged } from "firebase/auth";
import { db, authentication } from "../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import getUser from "../../firebase/getUser";

export default function RoomID({ navigation }: { navigation: any }) {
	const [roomID, setRoomID] = useState<any | null>(null);
	const { user } = getUser();

	const setData = async () => {
		const ref = doc(db, "users", `${roomID}`);
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
						onPress={() =>
							navigation.navigate("AddMedia", { roomNumber: roomID })
						}
					/>
				</View>
			</View>
		</View>
	);
}
