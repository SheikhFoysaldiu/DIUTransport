import React, { useEffect } from "react";
import { List, useTheme, Text, Surface } from "react-native-paper";
import { StyleSheet } from "react-native";
import { fetchBuses } from "../../redux/ApiCalls/bus";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
const BusList = ({ navigation, route }) => {
  const theme = useTheme();

  const dispatch = useDispatch();
  // const { buses, loading } = useSelector((state) => state.bus);

  // useEffect(() => {
  //   dispatch(fetchBuses());
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      {/* <Text>{route.params?.routeId}</Text> */}
      <Surface elevation={4}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusDetails", { busId: "সূর্যমুখি ১" })
          }
          key="1"
          style={styles.item}
          title="সূর্যমুখি ১"
          description="১"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface elevation={4}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusDetails", { busId: "সূর্যমুখি ২" })
          }
          key="2"
          style={styles.item}
          title="সূর্যমুখি ২"
          description="২"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface elevation={4}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusDetails", { busId: "সূর্যমুখি ৩" })
          }
          key="3"
          style={styles.item}
          title="সূর্যমুখি ৩"
          description="৩"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface elevation={4}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusDetails", { busId: "সূর্যমুখি ৪" })
          }
          key="4"
          style={styles.item}
          title="সূর্যমুখি ৪"
          description="৪"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default BusList;
