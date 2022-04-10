import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { styles } from "./RoomID.styles";
import {
	onAuthStateChanged,
} from "firebase/auth";
import uuid from 'react-native-uuid';
//firebase
import { db, authentication} from "../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore/lite"; 
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
    makeID();
    await setDoc(doc(db, "Room ID:" + roomID, user), { 
      roomID: roomID,
    })
  }
  const makeID = () => {
    setRoomID(Math.floor(Math.random() * Date.now()));
  }

	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<Text style={styles.title}>RoomID</Text>
        <Button
					style={{ marginTop: 5 }}
					title="Make ID"
					onPress={makeID}
				/>
				<Button
					style={{ marginTop: 5 }}
					title="Upload data"
					onPress={setData}
				/>
        <Button
					style={{ marginTop: 5 }}
					title="Last page"
					onPress={() => navigation.goBack()}
				/>
			</View>
		</View>
	);
}
