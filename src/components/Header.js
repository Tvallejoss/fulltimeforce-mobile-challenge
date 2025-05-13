// Hooks
import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require("../assets/icons/menu.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../assets/icons/filter.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
