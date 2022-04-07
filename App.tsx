import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/header";
//Screens
import tabOneScreen from "./screens/tabOneScreen/TabOneScreen";
import page4 from "./screens/sendFiles/SendFiles";
import page5 from "./screens/sendText/SendText";
import page6 from "./screens/selectDevices/SelectDevices";
import page7 from "./screens/insertFiles/InsertFiles";
import StartScreen from "./screens/StartScreen/StartScreen";
import RoomID from "./screens/RoomID/RoomID";
import page8 from "./screens/page8/Page8";
import page9 from "./screens/page9/Page9";
import yourRoomID from "./screens/yourRoomID/yourRoomID";

const Stack = createNativeStackNavigator();
//Add all names and components here
const Data = [
	{ name: "StartScreen", component: StartScreen },
	{ name: "RoomID", component: RoomID},
	{ name: "yourRoomID", component: yourRoomID},
	{ name: "page4", component: page4},
	{ name: "page5", component: page5},
	{ name: "page6", component: page6},
	{ name: "page7", component: page7},
	{ name: "page8", component: page8},
	{ name: "page9", component: page9},

];

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
				{Data.map((data: any) => {
					return (
						<Stack.Screen
							name={data.name}
							component={data.component}
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
