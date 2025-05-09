// Hooks
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
