import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Reducers/user";
import { Auth } from "aws-amplify";

const Setting = ({ navigation, props }) => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const { id, icon, title, link, showArrow } = props;
	return (
		<TouchableOpacity
			onPress={() => {
				if (link === "Sign-Out") {
					try {
						Auth.signOut();
						dispatch(logout());
					} catch (error) {
						Alert.alert(error);
					}
				} else {
					navigation.navigate(link);
				}
			}}
			style={{ ...styles.setting, backgroundColor: theme.colors.cardToggle }}
		>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Icon name={icon} size={25} color={theme.colors.text} />
				<Text style={{ marginHorizontal: 25 }}>{title}</Text>
			</View>
			{showArrow && <Icon name='angle-right' />}
		</TouchableOpacity>
	);
};

export default Setting;

const styles = StyleSheet.create({
	setting: {
		flexDirection: "row",
		elevation: 5,
		paddingHorizontal: 25,
		paddingVertical: 15,
		justifyContent: "space-between",
		alignItems: "center",
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 3,
		shadowOffset: {
			width: -2,
			height: 2,
		},
	},
});
