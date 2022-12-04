import { Text, StyleSheet } from "react-native";

import Colors from "../util/colors";

export default function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.secondary500,
		textAlign: "center",
		padding: 10,
		borderWidth: 2,
		borderColor: Colors.secondary500,
	},
});
