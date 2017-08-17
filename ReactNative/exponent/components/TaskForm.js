import React from "react";
import {
	Text,
	TextInput,
	View,
	ListView,
	StyleSheet,
} from "react-native";
import { NavigationActions } from "react-navigation";
import Colors from "./../constants/Colors";
import { Button } from "react-native-elements";

export default class TaskForm extends React.Component {
	render() {
		const nav = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text style={styles.getStartedText}>What's the next thing you have to do?</Text>
				<TextInput
					style={styles.input}
					onChangeText={taskTitle => this.setState({ taskTitle })}
				/>
				<Button
					raised
					title={`Add it`}
					icon={{ name: "done", size: 20 }}
					buttonStyle={styles.button}
					textStyle={styles.buttonText}
					onPress={() => {
						nav.state.params.onSelect({
							task: this.state.taskTitle
						});
						nav.goBack();
					}}
				/>

				<Button
					raised
					title={`Cancel`}
					icon={{ name: "cancel", size: 20 }}
					buttonStyle={styles.button}
					textStyle={styles.buttonText}
					onPress={() => nav.goBack()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f7f7f7",
		justifyContent: "flex-start"
	},
	getStartedText: {
		margin: 20,
		marginTop: 50,
		fontSize: 22,
		color: Colors.regularText,
		textAlign: "center"
	},
	input: {
		height: 60,
		borderRadius: 10,
		borderColor: Colors.regularText,
		borderWidth: 1,
		margin: 20,
		marginBottom: 80,
		padding: 10
	},
	button: {
		backgroundColor: Colors.tintColor,
		borderRadius: 10,
		marginBottom: 10,
		padding: 20
	},
	buttonText: {
		color: Colors.noticeText,
		textAlign: "center"
	}
});
