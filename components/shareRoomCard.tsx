import QRCode from "react-qr-code";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { Clipboard } from "react-native";
import { stylesMain } from "../core-ui/components.styles";

type ShareRoomCardProps = {
	roomId: string;
};

export const ShareRoomCard = ({ roomId }: ShareRoomCardProps) => {
	const copyToClipboard = () => {
		Clipboard.setString(roomId);
	};

	return (
		<View style={stylesMain.container}>
			<View style={stylesMain.mainContainer}>
				<Text style={stylesMain.title}>Share this room id to a device</Text>
				<View style={{ marginVertical: 5 }}>
					<Text style={stylesMain.text}>{roomId}</Text>
				</View>

				<Button
					style={stylesMain.button}
					title="Click here to copy"
					onPress={copyToClipboard}
				/>

				<View style={{ marginVertical: 10 }}>
					<Text style={stylesMain.text}>Or join with QR code</Text>
				</View>
				<View style={{ alignItems: "center", justifyContent: "center" }}>
					<QRCode value={roomId} />
				</View>
			</View>
		</View>
	);
};
