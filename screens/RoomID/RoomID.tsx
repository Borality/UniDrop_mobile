import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { stylesMain } from "../../components/components.styles";
import { styles } from "./RoomID.styles";
//firebase
import { db } from "../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import getUser from "../../firebase/getUser";

export default function RoomID({ navigation }: { navigation: any }) {
	const [roomID, setRoomID] = useState<any | null>(null);
	const { user } = getUser();

	const setData = async () => {
		//Makes id number
		const id = Math.floor(Math.random() * Date.now())
		//Uploads to firebase database as users/{roomID}
		const ref = doc(db, "users", `${id}`);
		await setDoc(ref, {
			roomNumber: id,
			userID: user,
		});
		//Savings roomID
		setRoomID(id);
	};

	return (
		<View style={stylesMain.container}>
			<View style={stylesMain.mainContainer}>
				<Text style={stylesMain.title}>Room ID</Text>
				<Button
					buttonStyle={stylesMain.button}
					title="Make ID"
					onPress={setData}
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						buttonStyle={stylesMain.button}
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
