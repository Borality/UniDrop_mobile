import * as React from "react";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "./TabOneScreen.styles";
import { TouchableOpacity, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const MyButton = ({
	page,
	title,
	navigation,
}: {
	page: string;
	title: string;
	navigation: any;
}) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => navigation.navigate(page)}
		>
			<Text style = {styles.buttonText} > {title} </Text>
		</TouchableOpacity>
	);
};

export default function TabOneScreen({ navigation }: { navigation: any }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>UniDrop</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<EditScreenInfo
				path="Sharing files"
				path2="The UniDrop way"
				path3="Share now"
			/>

			<View style={styles.buttonContainer}>
				<MyButton title = "Next" page = "tabTwoScreen" navigation = {navigation}/>
				{/*Add pages here */}
				<MyButton title="Page 1" page="StartScreen" navigation={navigation} />
				<MyButton title="Page 2" page="RoomID" navigation={navigation} />
				<MyButton title="Page 3" page="youRoomID" navigation={navigation} />
				<MyButton title="Page 4" page="page4" navigation={navigation} />
				<MyButton title="Page 5" page="page5" navigation={navigation} />
				<MyButton title="Page 6" page="page6" navigation={navigation} />
				<MyButton title="Page 7" page="page7" navigation={navigation} />
				<MyButton title="Page 8" page="page8" navigation={navigation} />
				<MyButton title="Page 9" page="page9" navigation={navigation} />
			</View>
			<TouchableOpacity key={1} onPress={() => navigation.goBack()}>
				<AntDesign name="back" size={50} />
			</TouchableOpacity>
		</View>
	);
}
