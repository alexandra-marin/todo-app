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
import { ExpoLinksView } from "@expo/samples";

export default class LinksScreen extends React.Component {
	static navigationOptions = {
		title: "Links"
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container}>
					<ExpoLinksView />
				</ScrollView>
				<View style={styles.tabBarInfoContainer}>
					<Text style={styles.tabBarInfoText}>Reminder!</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: "#fff"
	},
	tabBarInfoContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: "black",
				shadowOffset: { height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3
			},
			android: {
				elevation: 20
			}
		}),
		alignItems: "center",
		backgroundColor: "#fbfbfb",
		paddingVertical: 20
	},
	tabBarInfoText: {
		fontSize: 17,
		color: "rgba(96,100,109, 1)",
		textAlign: "center"
	}
});