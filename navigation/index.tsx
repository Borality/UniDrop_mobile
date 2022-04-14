import * as React from "react";
//Navigation
import {
	NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import Login from "../screens/Login/login";
import Start from "../screens/Start/start";
import RoomID from "../screens/RoomID/roomID";
import AddMedia from "../screens/AddMedia/addMedia";
import ShowMedia from "../screens/ShowMedia/showMedia";

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Login}
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
				name="Start"
				component={Start}
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
				name="AddMedia"
				component={AddMedia}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="ShowMedia"
				component={ShowMedia}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
