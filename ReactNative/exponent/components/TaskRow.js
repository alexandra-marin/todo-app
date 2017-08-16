import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";

export default class TaskRow extends Component {
	state = {};
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.label}>
					{this.props.todo.task}
				</Text>
				<Icon
					name="circular-graph"
					type="entypo"
					color="#f50"
					onPress={() => this.props.onDone(this.props.todo)}
				/>
			</View>
		);
	}
}
TaskRow.propTypes = {
	todo: React.PropTypes.shape({
		task: React.PropTypes.string.isRequired
	}).isRequired
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#fff",
		justifyContent: "space-between",
		margin: 10,
		padding: 10,
		borderWidth: 1,
		borderColor: "#e7e7e7"
	},
	label: {
		fontSize: 20,
		fontWeight: "300"
	},
	doneBtn: {
		borderRadius: 5,
		backgroundColor: "#EAEAEA",
		padding: 5
	}
});
