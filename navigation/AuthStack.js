import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/Student/OnboardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StudentStack from "./StudentStack";
import TicketManStack from "./TicketManStack";
import Loader from "../components/Loader";
import SignInScreen from "../screens/Auth/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen/SignUpScreen";
import ConfirmEmailScreen from "../screens/Auth/ConfirmEmailScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/Auth/NewPasswordScreen/NewPasswordScreen";

const Stack = createNativeStackNavigator();

const AuthFlow = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmEmail"
        component={ConfirmEmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return <Loader />;
  } else if (isFirstLaunch === true) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="onBoarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthFlow"
          component={AuthFlow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TicketManStack"
          component={TicketManStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="AuthFlow"
          component={AuthFlow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentStack"
          component={StudentStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TicketManStack"
          component={TicketManStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
};

export default AuthStack;
