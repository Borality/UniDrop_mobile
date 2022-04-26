import * as React from "react";
//Navigation
import {
	NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import Login from "../screens/Login/Login";
import Start from "../screens/Start/Start";
import RoomID from "../screens/RoomID/RoomID";
import AddMedia from "../screens/AddMedia/AddMedia";
import ShowMedia from "../screens/ShowMedia/ShowMedia";
import {Room} from "../screens/Room/room"
import {CreateRoom} from "../screens/CreateRoom/createRoom";
import {JoinRoom} from "../screens/JoinRoom/joinRoom";
import FileShare from "../screens/FileShare/fileShare";
import Home from "../screens/Home";
import Scanner from "../screens/Scanner";

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
			{/* <Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: true,
					title: "UniDrop",
					headerStyle: {
						backgroundColor: "#303846",
					},
					headerTintColor: "#fff",
				}}
			/> */}
			<Stack.Screen
				name="Start"
				component={Start}
				options={{
					headerShown: true,
					title: "UniDrop",
					headerStyle: {
						backgroundColor: "#303846",
					},
					headerTintColor: "#fff",
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
			<Stack.Screen
				name="CreateRoom"
				component={CreateRoom}
				options={{
					headerShown: true,
					title: "UniDrop",
				}}
			/>
			<Stack.Screen
				name="JoinRoom"
				component={JoinRoom}
				options={{
					headerShown: true,
					title: "UniDrop",
				}}
			/>
			<Stack.Screen
				name="FileShare"
				component={FileShare}
				options={{
					headerShown: true,
					title: "UniDrop",
				}}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: true,
					title: "UniDrop",
				}}
			/>
			<Stack.Screen
				name="Scanner"
				component={Scanner}
				options={{
					headerShown: true,
					title: "UniDrop",
				}}
			/>

		</Stack.Navigator>
	);
}
