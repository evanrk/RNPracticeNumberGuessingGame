import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import Colors from "./util/colors";

export default function App() {
	const [userNumber, setUserNumber] = useState();

	function pickNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
	}

	let screen = <StartGameScreen onValidPick={pickNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen />;
	}

	// console.log(Colors.primary700)

	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.secondary500]}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require("./assets/images/diceBackground.png")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
