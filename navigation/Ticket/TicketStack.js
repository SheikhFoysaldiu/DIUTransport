import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tickets from "../../screens/Student/Tickets";
import TicketDetails from "../../screens/Student/TicketDetails";
const Stack = createNativeStackNavigator();
const TicketStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="tickets"
        component={Tickets}
        options={{
          title: "Tickets",
        }}
      />
      <Stack.Screen
        name="TicketDetails"
        component={TicketDetails}
        options={{
          title: "Ticket",
        }}
      />
    </Stack.Navigator>
  );
};

export default TicketStack;
