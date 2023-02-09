import {
	View,
	StatusBar,
	Platform,
	SafeAreaView,
	FlatList,
} from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
import Setting from "../../../components/Settings/Setting";
import SwitchSetting from "../../../components/Settings/SwitchSetting";

const Settings = ({ navigation }) => {
	const theme = useTheme();
	const accountSettingsData = [
		{
			id: 1,
			icon: "user",
			title: "Profile",
			link: "Account",
			showArrow: true,
		},
		{
			id: 2,
			icon: "unlock",
			title: "Change Password",
			link: "ChangePassword",
			showArrow: true,
		},
		{
			id: 3,
			icon: "heart",
			title: "Favourites",
			link: "Favourites",
			showArrow: true,
		},
	];

	const contactDetailsData = [
		{
			id: 1,
			icon: "phone",
			title: "Phone",
			link: "Phone",
			showArrow: true,
		},
		{
			id: 2,
			icon: "address-card",
			title: "Address",
			link: "Address",
			showArrow: true,
		},
	];

	const signOutData = [
		{
			id: 1,
			icon: "sign-out-alt",
			title: "Sign-Out",
			link: "Sign-Out",
			showArrow: false,
		},
	];

	const preferencesData = [
		{
			id: 1,
			icon: "moon",
			title: "Dark Mode",
		},
	];
	const feedBack = [
		{
			id: 1,
			icon: "hand-holding-heart",
			title: "Feedback",
			link: "Feedback",
			showArrow: true,
		},
	];
	const ListHeader = ({ title }) => {
		return (
			<View style={{ paddingHorizontal: 25, marginBottom: 15 }}>
				<Text>{title}</Text>
			</View>
		);
	};
	const renderItem = ({ item }) => (
		<Setting props={item} navigation={navigation} />
	);
	const renderSwitchItem = ({ item }) => (
		<SwitchSetting props={item} navigation={navigation} />
	);

	const rendePage = () => (
		<>
			<View style={{ marginVertical: 30 }}>
				<FlatList
					ListHeaderComponent={<ListHeader title='Account Settings' />}
					data={accountSettingsData}
					listKey={1}
					numColumns={1}
					keyExtractor={(item) => `${item.id}`}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
				/>
			</View>
			<View style={{ marginVertical: 30 }}>
				<FlatList
					ListHeaderComponent={<ListHeader title='Contact Details' />}
					data={contactDetailsData}
					numColumns={1}
					listKey={2}
					keyExtractor={(item) => `${item.id}`}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
				/>
			</View>
			<View style={{ marginVertical: 30 }}>
				<FlatList
					ListHeaderComponent={<ListHeader title='Feedback' />}
					data={feedBack}
					numColumns={1}
					keyExtractor={(item) => `${item.id}`}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
				/>
			</View>
			<View style={{ marginVertical: 30 }}>
				<FlatList
					ListHeaderComponent={<ListHeader title='Preferences' />}
					data={preferencesData}
					numColumns={1}
					listKey={3}
					keyExtractor={(item) => `${item.id}`}
					renderItem={renderSwitchItem}
					showsVerticalScrollIndicator={false}
				/>
			</View>

			<View style={{ marginVertical: 30 }}>
				<FlatList
					ListHeaderComponent={<ListHeader title='Sign Out' />}
					data={signOutData}
					numColumns={1}
					keyExtractor={(item) => `${item.id}`}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</>
	);

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: theme?.colors.surface,
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
			}}
		>
			<SafeAreaView>
				<FlatList
					data={[{}]}
					renderItem={rendePage}
					numColumns={1}
					showsVerticalScrollIndicator={false}
				/>
			</SafeAreaView>
		</View>
	);
};

export default Settings;
