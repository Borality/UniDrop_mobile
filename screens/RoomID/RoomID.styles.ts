import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5D8AA8",
	},
	mainContainer: {
		width: "60%",
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		textAlign: "center",
	},
	item: {
		padding: 15,
		backgroundColor: "white",
	},
	buttonContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	buttonText: {
		fontWeight: "700",
		fontSize: 16,
	},
	button: {
		backgroundColor: "#0782F9",
		padding: 10,
		borderRadius: 10,
		alignItems: "center",
		marginTop: 5,
	},
});
