import React from "react";
import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TabNavigator, TabBarBottom } from "react-navigation";

import Colors from "../constants/Colors";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";

export default TabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				title: "Doing"
			}
		},
		Links: {
			screen: LinksScreen,
			navigationOptions: {
				title: "Done"
			}
		}
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
					case "Home":
						iconName = "star-o";
						break;
					case "Links":
						iconName = "star";
						break;
				}
				return (
					<FontAwesome
						name={iconName}
						size={28}
						style={{ marginBottom: -3 }}
						color={
							focused
								? Colors.tabIconSelected
								: Colors.tabIconDefault
						}
					/>
				);
			}
		}),
		tabBarComponent: TabBarBottom,
		tabBarPosition: "bottom",
		animationEnabled: false,
		swipeEnabled: false
	}
);
