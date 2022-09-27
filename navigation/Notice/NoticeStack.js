import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoticeBoard from "../../screens/Notice/NoticeBoard";
import NoticeDetails from "../../screens/Notice/NoticeDetails";
const Stack = createNativeStackNavigator();
const NoticeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NoticeBoard" component={NoticeBoard} />
      <Stack.Screen name="NoticeDetails" component={NoticeDetails} />
    </Stack.Navigator>
  );
};

export default NoticeStack;
