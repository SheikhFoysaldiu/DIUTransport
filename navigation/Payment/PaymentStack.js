import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectMethod from "../../screens/Payment/SelectMethod";
import Confirmations from "../../screens/Payment/Confirmations";
import PaymentProcess from "../../screens/Payment/PaymentProcess";
import SelectTicket from "../../screens/Payment/SelectTicket";
const Stack = createNativeStackNavigator();
const PaymentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="selectTicket"
    >
      {/* <Stack.Screen
        name="selectSchedule"
        component={SelectSchedule}
        options={{
          title: "Schedule Selection",
        }}
      /> */}
      {/* <Stack.Screen
        name="selectSeat"
        component={SelectSeat}
        options={{
          title: "Select A Seat",
        }}
      /> */}
      <Stack.Screen
        name="selectTicket"
        component={SelectTicket}
        options={{
          title: "Select Ticket",
        }}
      />
      <Stack.Screen
        name="selectMethod"
        component={SelectMethod}
        options={({ route }) => ({
          title: "Payment Method",
        })}
      />
      <Stack.Screen
        name="confirmation"
        component={Confirmations}
        options={({ route }) => ({
          title: "Confirmation",
        })}
      />
      <Stack.Screen
        name="paymentProcess"
        component={PaymentProcess}
        options={({ route }) => ({
          title: "Processing",
        })}
      />
    </Stack.Navigator>
  );
};

export default PaymentStack;
