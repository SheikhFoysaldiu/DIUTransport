import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "react-native-paper";
import TicketStack from "./Ticket/TicketStack";
import HomeStack from "./Student/HomeStack";
import SettingsStack from "./Settings/SettingsStack";

const Tab = createBottomTabNavigator();

const StudentTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.cardToggle,
          display: getTabBarVisibility(route),
        },
        tabBarInactiveTintColor: theme.colors.tabInactiveColor,
        tabBarActiveTintColor: theme.colors.tabActiveColor,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="home-outline"
              color={color}
              size={focused ? 35 : 27}
            />
          ),
        })}
      />

      <Tab.Screen
        name="YTickets"
        component={TicketStack}
        options={{
          title: "Your Tickets",
          tabBarBadge: 7,
          tabBarBadgeStyle: { backgroundColor: "tomato" },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name="ticket-alt"
              size={focused ? 35 : 27}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5 name="user" color={color} size={focused ? 35 : 27} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  console.log(routeName);

  if (
    routeName == "home" ||
    routeName == "Feed" ||
    routeName == "Profile7" ||
    routeName == "TicketDetails" ||
    routeName == "Home" ||
    routeName == "Settingss"
  ) {
    return "flex";
  }
  return "none";
};

export default StudentTabNavigator;
