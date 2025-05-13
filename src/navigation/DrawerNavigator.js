// Hooks
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";

// Screens
import HomeScreen from "../screens/HomeScreen";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();
const { width } = Dimensions.get("window");

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        swipeEnabled: true,
        drawerStyle: {
          width: width * 0.5,
          backgroundColor: "#FFB7CE",
        },
        overlayColor: "transparent",
        sceneContainerStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
