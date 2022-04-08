import React, { useState } from "react";
//React native buttons
import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	FlatList,
} from "react-native";
import { styles } from "./SelectDevices.styles";
//Icons
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "iPhone",
		icon: "phone-iphone",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Android",
		icon: "android",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Windows PC",
		icon: "desktop-windows",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d74",
		title: "Macintosh",
		icon: "desktop-mac",
	},
];

const Item = ({
	item,
	onPress,
	backgroundColor,
	textColor,
}: {
	item: any;
	onPress: any;
	backgroundColor: any;
	textColor: any;
}) => (
	<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
		<Text style={[styles.devicesTitle, textColor]}>{item.title}</Text>
		{item.icon == "phone-iphone" && (
			<MaterialIcons style={styles.devicesIcons} name={item.icon} size={50} />
		)}
		{item.icon == "android" && (
			<AntDesign style={styles.devicesIcons} name={item.icon} size={50} />
		)}
		{item.icon == "desktop-windows" && (
			<MaterialIcons style={styles.devicesIcons} name={item.icon} size={50} />
		)}
		{item.icon == "desktop-mac" && (
			<MaterialIcons style={styles.devicesIcons} name={item.icon} size={50} />
		)}
	</TouchableOpacity>
);

export default function Page6({ navigation }: { navigation: any }) {
	const [selectedId, setSelectedId] = useState(null);
	const renderItem = ({ item }: { item: any }) => {
		const backgroundColor = item.id === selectedId ? "#87ceeb" : "#0782F9";
		const color = item.id === selectedId ? "white" : "black";

		return (
			<Item
				item={item}
				onPress={() => setSelectedId(item.id)}
				backgroundColor={{ backgroundColor }}
				textColor={{ color }}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Select devices:</Text>
				<View style={styles.content}>
					<SafeAreaView style={styles.safeArea}>
						<FlatList
							data={DATA}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
							extraData={selectedId}
							numColumns={2}
						/>
					</SafeAreaView>
				</View>
				<View style={styles.content}>
					<TouchableOpacity						
						onPress={() => navigation.goBack()}
						style ={{marginLeft: 20}}
					>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
							buttonStyle={styles.button}
							title="Next"
							onPress={() => navigation.navigate("page7")}
						/>
				</View>
			</View>
		</View>
	);
}
