import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/header";
import tabOneScreen from "./screens/tabOneScreen/TabOneScreen";
import tabTwoScreen from "./screens/tabTwoScreen/TabTwoScreen";
import page4 from "./screens/sendFiles/SendFiles";
import page5 from "./screens/sendText/SendText";
import page6 from "./screens/selectDevices/SelectDevices";
import page7 from "./screens/insertFiles/InsertFiles";
import StartScreen from "./screens/StartScreen/StartScreen";
import RoomID from "./screens/RoomID/RoomID";
import page8 from "./screens/page8/Page8";
import page9 from "./screens/page9/Page9";

const Stack = createNativeStackNavigator();


export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="tabOneScreen"
					component={tabOneScreen}
					options={{
						headerShown: true,
						title: "UniDrop",
						headerStyle: {
							backgroundColor: "#1f1f1f",
						},
						headerTintColor: "#fff",
					}}
				/>
				<Stack.Screen
					name="tabTwoScreen"
					component={tabTwoScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="StartScreen"
					component={StartScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="RoomID"
					component={RoomID}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="page5"
					component={page5}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="page6"
					component={page6}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="page7"
					component={page7}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="page8"
					component={page8}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="page9"
					component={page9}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="page4"
					component={page4}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
