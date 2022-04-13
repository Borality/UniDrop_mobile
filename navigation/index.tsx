import * as React from "react";
//Navigation
import {
	NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import Login from "../screens/login/Login";
import Start from "../screens/start/Start";
import RoomID from "../screens/roomID/RoomID";
import AddMedia from "../screens/addMedia/AddMedia";
import ShowMedia from "../screens/showMedia/ShowMedia";

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
