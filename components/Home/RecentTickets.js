import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Surface, useTheme } from "react-native-paper";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const RecentTickets = ({ navigation }) => {
  const theme = useTheme();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Surface
        elevation={5}
        style={{
          padding: 35,
          marginLeft: 10,
          marginTop: 10,
          marginRight: 70,
          marginBottom: 15,
          borderRadius: 10,
          backgroundColor: theme.colors.cardToggle,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <EvilIcons name="calendar" size={25} color={theme.colors.text} />
          <Text style={{ marginLeft: 5 }}>18-Jun,2000</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Ionicons
            name="pricetags-outline"
            size={20}
            color={theme.colors.text}
          />
          <Text
            style={{ fontWeight: "500", marginLeft: 10, fontStyle: "italic" }}
          >
            25 TK
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <EvilIcons name="location" size={25} color={theme.colors.text} />
          <Text>Jamgora To DSC</Text>
        </View>
      </Surface>

      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("StuduentProfile")}
      >
        <FontAwesome5
          name="arrow-right"
          size={30}
          color={theme.colors.accentToggle}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RecentTickets;
