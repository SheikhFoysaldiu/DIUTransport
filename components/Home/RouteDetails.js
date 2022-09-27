import React from "react";
import { useTheme, Text } from "react-native-paper";
import { FlatList, SafeAreaView, View } from "react-native";
import Bus from "../Bus/Bus";
const BusList = ({ navigation, route }) => {
  const theme = useTheme();

  const { routeId, routeName, Buses, pickupPoints, avg_duration, distance } =
    route?.params?.info;

  const renderItem = ({ item }) => (
    <Bus props={item} navigation={navigation} info={route?.params?.info} />
  );

  const renderPromoHeader = () => (
    <View style={{ marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Available Buses</Text>
    </View>
  );

  const renderPage = () => (
    <>
      {/* <ImageBackground source={{ uri: image }} style={{ padding: 50 }} /> */}

      <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 15 }}>
          Route Details
        </Text>

        <Text style={{ lineHeight: 25, fontSize: 18 }}>
          {pickupPoints.join(" ⚡️ ")}
        </Text>
      </View>

      {/* <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", marginBottom: 15 }}
            >
              Starting Times
            </Text>
            <Text>No schedule available!</Text>
          </View>
          <View>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", marginBottom: 15 }}
            >
              Departure Times
            </Text>
            <Text>No schedule available!</Text>
          </View>
        </View>
      </View> */}

      <View style={{ paddingHorizontal: 25, marginVertical: 15 }}>
        {Buses.items.length > 0 ? (
          <FlatList
            ListHeaderComponent={renderPromoHeader}
            data={Buses.items}
            listKey={1}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={{ fontWeight: "bold" }}>No Buses Available</Text>
        )}
      </View>
    </>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={[{}]}
        numColumns={1}
        renderItem={renderPage}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default BusList;
