import React from "react";
import {
	Text,
	View,
	ListView,
	StyleSheet,
	TouchableHighlight,
	Switch
} from "react-native";

import TaskRow from "./TaskRow";

import { StackNavigator } from "react-navigation";
import dataStore from "../store/taskStore";
import { Button } from 'react-native-elements';

export default class TaskList extends React.Component {
	constructor(props, context) {
		super(props, context);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.state = {
			todos: this.props.todos,
			dataSource: ds.cloneWithRows(this.props.todos)
		};
	}
	render() {
		const { navigate } = this.props.nav;

		return (
			<View style={styles.container}>
				<View style={styles.toggleRow}>
					<Switch
						value={this.props.filter !== "pending"}
						onValueChange={this.props.onToggle}
					/>
					<Text style={styles.toggle}>
						Showing: {this.props.todos.length} {this.props.filter}{" "}
						tasks
					</Text>
				</View>

				<ListView
					dataSource={this.state.dataSource}
					renderRow={rowData =>
						<TaskRow onDone={this.props.onDone} todo={rowData} />}
				/>
				<Button
					raised
					icon={{ name: "edit", size: 32 }}
					buttonStyle={{ backgroundColor: "#f50", borderRadius: 10, marginBottom: 10 }}
					textStyle={{ textAlign: "center" }}
					title={`Add new task`}
                    onPress={() =>
						navigate("AddNew", {
							onSelect: this.onSelect.bind(this)
						})}
				/>
			</View>
		);
	}

	onSelect(task) {
		dataStore.dispatch({ type: "ADD", task });
		this.updateRows();
	}

	componentWillReceiveProps(nextProps) {
		const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
		this.setState({ dataSource });
	}

	updateRows() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.setState({
			dataSource: ds.cloneWithRows(this.props.todos)
		});
	}
}

TaskList.propTypes = {
	todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	onDone: React.PropTypes.func.isRequired,
	onToggle: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f7f7f7",
		justifyContent: "flex-start"
	},
	toggleRow: {
		flexDirection: "row",
		padding: 20
	},
	toggle: {
		fontSize: 20,
		marginLeft: 20
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
