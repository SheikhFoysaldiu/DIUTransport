import {
	View,
	StyleSheet,
	Platform,
	KeyboardAvoidingView,
	StatusBar,
	Pressable,
	Touchable,
	TouchableOpacity,
} from "react-native";
import { useTheme, Text, TextInput, Button } from "react-native-paper";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Input, theme } from "native-base";
import { sortByField } from "@aws-amplify/core";

const FeedBack = () => {
	const theme = useTheme();
	const [icon, setIcon] = useState("laugh");
	const [feedBack, setFeedBack] = useState("");
	const handlePress = (icon) => {
		setIcon(icon);
	};
	const handleSubmit = () => {};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: theme?.colors.surface,
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
			}}
		>
			<KeyboardAvoidingView style={{ paddingHorizontal: 25 }}>
				<View
					style={{
						backgroundColor: theme.colors.cardToggle,
					}}
				>
					<View style={styles.container}>
						<View style={styles.text}>
							<Text>Give FeedBack</Text>
							<Text>What do you think about our service?</Text>
						</View>
						<View style={styles.icon}>
							<TouchableOpacity onPress={() => handlePress("sad-tear")}>
								<Icon
									name={"sad-tear"}
									size={icon === "sad-tear" ? 70 : 40}
									color={theme.colors.deepYellow}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => handlePress("meh")}>
								<Icon
									name={"meh"}
									size={icon === "meh" ? 70 : 40}
									color={theme.colors.deepYellow}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => handlePress("laugh")}>
								<Icon
									name={"laugh"}
									size={icon === "laugh" ? 70 : 40}
									color={theme.colors.deepYellow}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => handlePress("laugh-beam")}>
								<Icon
									name={"laugh-beam"}
									size={icon === "laugh-beam" ? 70 : 40}
									color={theme.colors.deepYellow}
								/>
							</TouchableOpacity>
						</View>

						<View style={{ display: "flex" }}>
							<TextInput
								mode='outlined'
								outlineColor={theme.colors.green}
								placeholder='Write something about our service'
								// backgroundColor={theme.colors.cardToggle}
								style={{ margin: 10 }}
								// activeUnderlineColor={theme.colors.green} //when this TextInput is active, change its accent color to green
								// underlineColor={theme.colors.purple} //when inactive, set color to purple
								value={feedBack}
								onChangeText={setFeedBack}
								autoCapitalize='none'
								maxLength={500}
								multiline
								numberOfLines={10}
							/>
						</View>
						<Button onPress={() => handleSubmit}>Submit</Button>
					</View>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	text: {
		padding: 15,
		alignItems: "center",
	},
	icon: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	selectIcon: {
		marginTop: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	submit: {},
});

export default FeedBack;
