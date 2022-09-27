import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../../screens/Student/Settings/Settings";
import ProfileStack from "../Profile/ProfileStack";
import Address from "../../screens/Student/Settings/Address";
import ChangePassword from "../../screens/Student/Settings/ChangePassword";
import Favourites from "../../screens/Student/Settings/Favourites";
import Phone from "../../screens/Student/Settings/Phone";
const Stack = createNativeStackNavigator();
const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settingss"
        component={Settings}
        options={{ title: "Settings" }}
      />

      <Stack.Screen name="Account" component={ProfileStack} />

      <Stack.Screen name="Address" component={Address} />

      <Stack.Screen name="ChangePassword" component={ChangePassword} />

      <Stack.Screen name="Favourites" component={Favourites} />

      <Stack.Screen name="Phone" component={Phone} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
