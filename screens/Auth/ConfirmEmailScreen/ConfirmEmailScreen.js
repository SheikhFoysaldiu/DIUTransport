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
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "../../../components/CustomButton/CustomButton";

const ConfirmEmailScreen = ({ navigation, route }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const username = watch("username");

  const onConfirmPressed = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate("SignIn");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Success", "Code was resent to your email");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
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
            <Text style={styles.title}>Confirm your email</Text>

            <CustomInput
              name="code"
              control={control}
              placeholder="Enter your confirmation code"
              rules={{
                required: "Confirmation code is required",
              }}
            />

            <CustomButton
              text={loading ? "Checking..." : "Confirm"}
              onPress={handleSubmit(onConfirmPressed)}
            />

            <CustomButton
              text="Resend code"
              onPress={onResendPress}
              type="SECONDARY"
            />

            <CustomButton
              text="Back to Sign in"
              onPress={onSignInPress}
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
    padding: 20,
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

export default ConfirmEmailScreen;
