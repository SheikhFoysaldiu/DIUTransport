import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import NoticeBoard from "../screens/Notice/NoticeBoard";
import TicketScan from "../screens/TicketMan/TicketScan";
import TicketmanTabNavigator from "./TicketmanTabNavigator";
import Settings from "../screens/TicketMan/Settings/Settings";

const Drawer = createDrawerNavigator();

const TicketManStack = () => {
  const theme = useTheme();
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: theme.colors.accent,
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            marginLeft: -25,

            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen
          name="TicketManHome"
          component={TicketmanTabNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="TicketScan"
          component={TicketScan}
          options={{
            title: "Scan",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="scan" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="NoticeBoard"
          component={NoticeBoard}
          options={{
            title: "Notice",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="notifications" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "Settings",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default TicketManStack;
