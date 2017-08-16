import React from "react";
import {
	Text,
	TextInput,
	View,
	ListView,
	StyleSheet,
	TouchableHighlight
} from "react-native";
import { NavigationActions } from "react-navigation";

export default class TaskForm extends React.Component {
	render() {
		const nav = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text style={styles.getStartedText}>Add your task here:</Text>
				<TextInput
					style={styles.input}
					onChangeText={taskTitle => this.setState({ taskTitle })}
				/>
				<TouchableHighlight
					style={styles.button}
					onPress={() => {
						nav.state.params.onSelect({
							task: this.state.taskTitle
						});
						nav.goBack();
					}}
				>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style={styles.button}
					onPress={() => nav.goBack()}
				>
					<Text style={styles.buttonText}>Cancel</Text>
				</TouchableHighlight>
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
        marginTop: 50,
        marginLeft: 20,
		fontSize: 21,
		color: "rgba(96,100,109, 1)",
		lineHeight: 24,
        textAlign: "left",
	},
	input: {
		height: 60,
		borderColor: "#D7d7d7",
		borderWidth: 1,
		margin: 20,
		padding: 10
	},
	button: {
		height: 60,
		borderColor: "#05A5D1",
		borderWidth: 2,
		backgroundColor: "#333",
		margin: 20,
		justifyContent: "center",
		alignItems: "center"
	},
	buttonText: {
		color: "#FAFAFA",
		fontSize: 20,
		fontWeight: "600"
	}
});
