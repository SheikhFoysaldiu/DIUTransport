import React, { useState } from "react";
import Logo from "../../../assets/images/tlogo.png";
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  useWindowDimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import { useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { Login } from "../../../redux/Reducers/user";

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const { height } = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      dispatch(
        Login({
          groups:
            response.signInUserSession.accessToken.payload["cognito:groups"],
          token: response.signInUserSession.refreshToken.token,
          user: response.attributes,
        })
      );
      // console.log(
      //   response.signInUserSession.accessToken.payload["cognito:groups"]
      // );

      if (
        response.signInUserSession.accessToken.payload["cognito:groups"] &&
        response.signInUserSession.accessToken.payload[
          "cognito:groups"
        ].includes("TicketChecker")
      ) {
        navigation.replace("TicketManStack");
      } else {
        navigation.replace("StudentStack");
      }
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.root}>
            <Image
              source={Logo}
              style={[styles.logo, { height: height * 0.1 }]}
              resizeMode="contain"
            />

            <CustomInput
              name="username"
              placeholder="Username"
              control={control}
              rules={{ required: "Username is required" }}
            />

            <CustomInput
              name="password"
              placeholder="Password"
              secureTextEntry
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 3,
                  message: "Password should be minimum 3 characters long",
                },
              }}
            />

            <CustomButton
              text={loading ? "Loading..." : "Sign In"}
              onPress={handleSubmit(onSignInPressed)}
            />

            <CustomButton
              text="Forgot password?"
              onPress={onForgotPasswordPressed}
              type="TERTIARY"
            />

            <CustomButton
              text="Don't have an account? Create one"
              onPress={onSignUpPress}
              type="TERTIARY"
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 40,
    paddingVertical: 80,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    marginVertical: 30,
  },
});

export default SignInScreen;
