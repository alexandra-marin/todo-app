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
import dataStore from "../store/taskStore";

export default class HomeScreen extends React.Component {
	constructor(props, context) {
		super(props, context);
		console.log(this.props);
		this.state = dataStore.getState();

		dataStore.subscribe(() => {
			this.setState(dataStore.getState());
		});
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
                        filter={this.state.filter}
						onDone={this.onDone.bind(this)}
						onToggle={this.onToggle.bind(this)}
					/>
				</ScrollView>
			</View>
		);
	}

	onDone(task) {
		dataStore.dispatch({ type: "DELETE", task });
    }
    
    onToggle(task) {
		dataStore.dispatch({ type: "TOGGLE_STATE" });
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
