import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/header";
//Screens
import TabOneScreen from "./screens/tabOneScreen/TabOneScreen";
import StartScreen from "./screens/StartScreen/StartScreen";
import RoomID from "./screens/RoomID/RoomID";
import YourRoomID from "./screens/yourRoomID/yourRoomID";
import Page4 from "./screens/sendText/SendText";
import Page5 from "./screens/sendFiles/SendFiles";
import Page6 from "./screens/selectDevices/SelectDevices";
import Page7 from "./screens/insertFiles/InsertFiles";
import Page8 from "./screens/page8/Page8";
import Page9 from "./screens/page9/Page9";
import Login from "./screens/login/Login";

const Stack = createNativeStackNavigator();
//Add all names and components here
const Data = [
	{ name: "startScreen", component: StartScreen, key: 1},
	{ name: "roomID", component: RoomID, key: 2},
	{ name: "yourRoomID", component: YourRoomID, key: 3},
	{ name: "page4", component: Page4, key: 4},
	{ name: "page5", component: Page5, key: 5},
	{ name: "page6", component: Page6, key: 6},
	{ name: "page7", component: Page7, key: 7},
	{ name: "page8", component: Page8, key: 8},
	{ name: "page9", component: Page9, key: 9},
	{ name: "login", component: Login, key: 10},

];

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="TabOneScreen"
					component={TabOneScreen}
					options={{
						headerShown: true,
						title: "UniDrop",
						headerStyle: {
							backgroundColor: "#1f1f1f",
						},
						headerTintColor: "#fff",
					}}
				/>
				{Data.map((data: any) => {
					return (
						<Stack.Screen
							name={data.name}
							component={data.component}
							key = {data.key}
							options={{
								headerShown: false,
							}}
						/>
					);
				})}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
