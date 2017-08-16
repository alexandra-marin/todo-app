import React from "react";
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import TaskList from "../components/TaskList";

export default class HomeScreen extends React.Component {
	constructor(props, context) {
		super(props, context);
		console.log(this.props);
		this.state = {
			todos: [
				{
					task: "Task1"
				},
				{
					task: "Task2"
				}
			]
		};
	}
	static navigationOptions = {
		title: "Tasks"
	};
	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}
				>
					<TaskList
						nav={this.props.navigation}
						todos={this.state.todos}
						onDone={this.onDone.bind(this)}
						onAddStarted={this.onAddStarted.bind(this)}
					/>
				</ScrollView>
			</View>
		);
	}

	onAddStarted() {
		console.log("hello");
	}

	onDone(task) {
		console.log(task);
		const filtered = this.state.todos.filter(x => x.task !== task.task);
		console.log(filtered);
		this.setState({ todos: filtered });
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	contentContainer: {
		paddingTop: 0,
		flex: 1
	}
});
