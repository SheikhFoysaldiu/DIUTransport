import { TouchableOpacity } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
const Menu = ({ props, navigation }) => {
  const theme = useTheme();
  const { name, description, backgroundColor, icon, toRoute } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(toRoute)}
      style={{
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        borderRadius: 40,
      }}
    >
      <Icon size={30} name={icon} color={theme.colors.text} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingTop: 15,
          paddingBottom: 10,
        }}
      >
        {name}
      </Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};

export default Menu;
