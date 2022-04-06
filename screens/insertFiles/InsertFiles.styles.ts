import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5D8AA8",
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
	},
	item: {
		padding: 15,
		backgroundColor: "white",
	},
	content: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	buttonText: {
		fontWeight: "700",
		fontSize: 16,
	},
	button: {
		backgroundColor: "#6495ed",
		padding: 10,
		borderRadius: 10,
		alignItems: "center",
		marginHorizontal: 15,
	},

});
