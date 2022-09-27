import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "react-native-paper";
import TicketScan from "../screens/TicketMan/TicketScan";
import ScanHistory from "../screens/TicketMan/ScanHistory";
import Settings from "../screens/TicketMan/Settings/Settings";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TicketmanTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: theme.colors.accent },
        tabBarInactiveTintColor: theme.colors.tabInactiveColor,
        tabBarActiveTintColor: theme.colors.tabActiveColor,
      }}
    >
      <Tab.Screen
        name="ScanHistory"
        component={ScanHistory}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: theme.colors.accent,
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="TicketScan"
        component={TicketScan}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: theme.colors.accent,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="settings"
        component={Settings}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: theme.colors.accent,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  console.log(routeName);
  if (routeName == "Home" || routeName == "Feed" || routeName == "profile") {
    return "flex";
  }
  return "none";
};
export default TicketmanTabNavigator;
