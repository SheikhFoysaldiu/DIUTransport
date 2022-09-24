import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import { useTheme, Text, List, Surface, Divider } from "react-native-paper";
import { useSelector } from "react-redux";

const TicketDetails = ({ route, navigation }) => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.user);

  const {
    Bus: { name: busName, trackingID },
    name,
    paymentVia,
    price,
    id,
    Route: { routeName },
    routeID,
    userID,
    token,
    expired,
    createdAt,
    updatedAt,
    busID,
  } = route.params?.info;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: theme.colors.accent,
            height: 150,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        ></View>
        <Surface
          elevation={4}
          style={{
            marginTop: -100,
            flexDirection: "column",
            backgroundColor: theme.colors.cardToggle,
            marginHorizontal: 40,
            paddingVertical: 25,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Full Name:</Text>
            <Text>{user?.name}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Payment Via:</Text>
            <Text>{paymentVia}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Bus Name:</Text>

            <Text>{busName}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{ color: theme.colors.darkRed }}>Live Location: </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BusLocate", {
                  busId: trackingID,
                  trackingID: trackingID,
                  info: route.params?.info,
                  name: route?.params?.info?.name,
                })
              }
            >
              <Text style={{ fontWeight: "bold" }}>View</Text>
            </TouchableOpacity>
          </View>

          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Seat:</Text>
            <Text>E1</Text>
          </View> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Route:</Text>
            <Text>{routeName}</Text>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Date &amp; Time:</Text>
            <Text>
              {date} ⚡️ {time}
            </Text>
          </View> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Price:</Text>
            <Text>{price} BDT.</Text>
          </View>

          <Divider style={{ marginBottom: 25 }} />
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <QRCode value={token} size={150} />
          </View>
        </Surface>
      </ScrollView>
    </View>
  );
};

export default TicketDetails;
