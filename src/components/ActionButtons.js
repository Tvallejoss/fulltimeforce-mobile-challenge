// Hooks
import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function ActionButtons({ onDislike, onSuperLike, onLike }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onDislike}>
        <Image
          source={require("../assets/icons/dislike.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onSuperLike}>
        <Image
          source={require("../assets/icons/superlike.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.like]} onPress={onLike}>
        <Image
          source={require("../assets/icons/like.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 40,
    padding: 18,
    elevation: 4,
  },
  like: {
    backgroundColor: "#FF4470",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
