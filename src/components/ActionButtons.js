// Hooks
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

// Icons
import DislikeIcon from "./icons/DislikeIcon";
import SuperLikeIcon from "./icons/SuperLikeIcon";
import LikeIcon from "./icons/LikeIcon";

export default function ActionButtons({ onDislike, onSuperLike, onLike }) {
  const [pressed, setPressed] = useState(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={onDislike}
        onPressIn={() => setPressed("dislike")}
        onPressOut={() => setPressed(null)}
        activeOpacity={1}
      >
        <DislikeIcon
          fill={pressed === "dislike" ? "#FF58A4" : "#D0BFBF"}
          iconColor="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={onSuperLike}
        onPressIn={() => setPressed("superlike")}
        onPressOut={() => setPressed(null)}
        activeOpacity={1}
      >
        <SuperLikeIcon
          fill={pressed === "superlike" ? "#FF58A4" : "#fff"}
          iconColor={pressed === "superlike" ? "#fff" : "#FF6B86"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={onLike}
        onPressIn={() => setPressed("like")}
        onPressOut={() => setPressed(null)}
        activeOpacity={1}
      >
        <LikeIcon fill={pressed === "like" ? "#FF58A4" : "#FEB5DB"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  touchable: {
    width: 78,
    height: 78,
    justifyContent: "center",
    alignItems: "center",
  },
});
