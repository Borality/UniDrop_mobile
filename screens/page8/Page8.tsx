import React, { useState } from "react";
import {
	View,
	Text,
	Button,
	TouchableOpacity,
	Image,
	SafeAreaView,
	FlatList,
} from "react-native";
import { styles } from "./Page8.styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

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

export default function page5({ navigation }: { navigation: any }) {
	const [selectedId, setSelectedId] = useState(null);
	const renderItem = ({ item }: { item: any }) => {
		const backgroundColor = item.id === selectedId ? "#87ceeb" : "#6495ed";
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
				<Text style={styles.title}>Review files:</Text>
				<View style={styles.content}>
					<Image source={require("../../assets/images/iphone.jpeg")} />
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
					<TouchableOpacity key={1} onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
					<Button
						title="Send"
						color="#6495ed"
						onPress={() => navigation.navigate("page9")}
					/>
				</View>
			</View>
		</View>
	);
}
