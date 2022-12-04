import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

import Colors from "../util/colors";

export default function StartGameScreen(props) {
	const [enteredValue, setEnteredValue] = useState("");
    const [tries, setTries] = useState(0)

	function numberInputHandler(value) {
		setEnteredValue(value);
	}

	function resetInput() {
		setEnteredValue("");
	}

    function nextTry() {
        resetInput()  
        setTries((tries) => tries+1);
    }


	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredValue);
        
		if (tries%5 === 0 && tries > 0  ){
            Alert.alert("Fuck you", "you little shit", [{
                text: "ok.",
                style: "destructive",
                onPress: nextTry,
            }])
            return;

        } else if (isNaN(chosenNumber)) {
			Alert.alert("Not a number!", "You have to enter a number X(", [
				{
					text: "ok :D",
					style: "destructive",
					onPress: nextTry,
				},
			]);
			return;
		} else if (chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid Number",
				"Your number has to be between 1 and 99!",
				[
					{
						text: "ok :D",
						style: "destructive",
						onPress: nextTry,
					},
				]
			);
            return;
		}

		props.onValidPick(chosenNumber)
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={numberInputHandler}
				value={enteredValue}
			/>
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
				</View>
				<View style={styles.button}>
					<PrimaryButton onPress={confirmInputHandler}>
						Confirm
					</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	input: {
		height: 50,
		fontSize: 32,
		borderBottomColor: Colors.secondary500,
		borderBottomWidth: 2,
		color: Colors.secondary500,
		marginVertical: 8,
		fontWeight: "bold",
		width: 50,
		textAlign: "center",
	},
	buttonContainer: {
		flexDirection: "row",
	},
	button: {
		flex: 1,
	},
});
