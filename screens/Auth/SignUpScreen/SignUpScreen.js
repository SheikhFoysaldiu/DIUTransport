import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = ({ navigation }) => {
  const theme = useTheme();
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const onRegisterPressed = async (data) => {
    const { username, password, email, name, studentID, area, phone } = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
          preferred_username: username,
          "custom:area": area,
          "custom:phone": phone,
          "custom:studentID": studentID,
        },
      });

      navigation.navigate("ConfirmEmail", { username });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>

            <CustomInput
              name="name"
              control={control}
              placeholder="Name"
              rules={{
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name should be at least 3 characters long",
                },
                maxLength: {
                  value: 24,
                  message: "Name should be max 24 characters long",
                },
              }}
            />

            <CustomInput
              name="username"
              control={control}
              placeholder="Username"
              rules={{
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username should be at least 3 characters long",
                },
                maxLength: {
                  value: 24,
                  message: "Username should be max 24 characters long",
                },
              }}
            />
            <CustomInput
              name="email"
              control={control}
              placeholder="Email"
              rules={{
                required: "Email is required",
                pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
              }}
            />
            <CustomInput name="area" control={control} placeholder="Area" />
            <CustomInput
              name="phone"
              control={control}
              placeholder="Phone"
              rules={{
                required: "Phone is required",
                minLength: {
                  value: 11,
                  message: "Invalid Phone Number",
                },
                maxLength: {
                  value: 14,
                  message: "Inavlid Phone Number",
                },
              }}
            />
            <CustomInput
              name="studentID"
              control={control}
              placeholder="Student ID"
              rules={{
                required: "Student ID is required",
                minLength: {
                  value: 7,
                  message: "Please use DIU Student ID",
                },
                maxLength: {
                  value: 15,
                  message: "Inavlid DIU Student ID",
                },
              }}
            />
            <CustomInput
              name="password"
              control={control}
              placeholder="Password"
              secureTextEntry
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters long",
                },
              }}
            />
            <CustomInput
              name="password-repeat"
              control={control}
              placeholder="Repeat Password"
              secureTextEntry
              rules={{
                validate: (value) => value === pwd || "Password do not match",
              }}
            />

            <CustomButton
              text="Register"
              onPress={handleSubmit(onRegisterPressed)}
            />

            <Text style={styles.text}>
              By registering, you confirm that you accept our{" "}
              <Text style={styles.link} onPress={onTermsOfUsePressed}>
                Terms of Use
              </Text>{" "}
              and{" "}
              <Text style={styles.link} onPress={onPrivacyPressed}>
                Privacy Policy
              </Text>
            </Text>

            <CustomButton
              text="Have an account? Sign in"
              onPress={onSignInPress}
              type="TERTIARY"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
