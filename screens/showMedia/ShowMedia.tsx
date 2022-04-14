import React, { useState, useEffect } from "react";
import {stylesMain} from "../../core-ui/components.styles";
import { styles } from "./showMedia.styles";
//Components
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-elements";
//Icons
import { AntDesign } from "@expo/vector-icons";
//Firebase
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
	query,
	where,
	collection,
	getDocs,
} from "firebase/firestore";
import { db} from "../../firebase/firebase-config";
import getUser from "../../firebase/getUser";

export default function Page8({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) {
	const { pathName } = route.params;
	//Will store url
	const [url, setUrl] = useState<any | null>(null);
	const [users, setUsers] = useState<any | null>(null);

	const {user} = getUser();

	//For getting data from db
	useEffect(() => {
		const getText = async () => {
			const q = query(collection(db, "users"), where("userID", "==", `${user}`));

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
			});
		};
		getText();
	});

	//For getting url from server
	useEffect(() => {
		const func = async () => {
			const storage = getStorage();
			const reference = ref(storage, pathName);
			await getDownloadURL(reference).then((x) => {
				setUrl(x);
			});
		};
		if (url == undefined) {
			func();
		}
	}, []);

	return (
		<View style={stylesMain.container}>
			<View style={stylesMain.mainContainer}>
				<Text style={stylesMain.title}>Review files</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						buttonStyle={stylesMain.button}
						title="Next"
						onPress={() => navigation.navigate("Start")}
					/>
				</View>
				<View style={{ marginVertical: 10, width: "100%", height: "50%" }}>
					<Image
						style={{ width: "100%", height: "100%" }}
						source={{ uri: url }}
					/>
				</View>
			</View>
		</View>
	);
}
