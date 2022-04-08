import * as React from "react";
import { styles } from "./TabOneScreen.styles";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";

export default function TabOneScreen({ navigation }: { navigation: any }) {
	//Add buttons here and it will auto create the buttons
	const Data = [
		{
			title: "Page 1",
			component: "StartScreen",
			navigation: navigation,
			key: 1,
		},
		{ title: "Page 2", component: "RoomID", navigation: navigation, key: 1 },
		{
			title: "Page 3",
			component: "yourRoomID",
			navigation: navigation,
			key: 3,
		},
		{ title: "Page 4", component: "page5", navigation: navigation, key: 4 },
		{ title: "Page 5", component: "page6", navigation: navigation, key: 5 },
		{ title: "Page 6", component: "page7", navigation: navigation, key: 6 },
		{ title: "Page 7", component: "page8", navigation: navigation, key: 7 },
		{ title: "Page 8", component: "page9", navigation: navigation, key: 8 },
		{ title: "Page 9", component: "page9", navigation: navigation, key: 9 },
	];
	return (
		<View style={styles.container}>
			<Text style={styles.title}>UniDrop</Text>
			<View style={styles.buttonContainer}>
				{Data.map((data: any) => {
					return (
						<Button
							buttonStyle={styles.button}
							title={data.title}
							onPress={() => navigation.navigate(data.component)}
							key={data.key}
						/>
					);
				})}
			</View>
		</View>
	);
}
