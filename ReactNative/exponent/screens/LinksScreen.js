import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";
import dataStore from "../store/taskStore";
import Colors from "./../constants/Colors";

export default class LinksScreen extends React.Component {
	constructor(props, context) {
		super(props, context);
		console.log(this.props);
		this.state = dataStore.getState();
	}
	render() {
		return (
			<ScrollView>
				<List containerStyle={styles.list}>
					{this.state.allTodos.map((item, i) =>
						<ListItem
							titleStyle={styles.listItem}
							key={i}
							leftIcon={{
								name: "circular-graph",
								size: 32,
								color: Colors.tintColor,
								type: "entypo"
							}}
							title={item.task}
							subtitle={"Status: " + item.state}
						/>
					)}
				</List>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	list: {
        margin: 0,
        padding: 0,
        backgroundColor: Colors.regularBackground,
    },
	listItem: {
		color: Colors.regularText,
		fontSize: 22
	}
});
