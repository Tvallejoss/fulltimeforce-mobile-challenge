// Hooks
import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

export default function FilterButton({ icon, label, active, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.outerCircle, active && styles.activeBorder]}>
        <View style={[styles.iconWrapper, active && styles.activeCircle]}>
          <Image source={icon} style={styles.icon} />
        </View>
      </View>
      {active && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 14,
  },
  outerCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  activeBorder: {
    borderWidth: 1,
    borderColor: "#FFB1C7",
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.4,
  },
  activeCircle: {
    opacity: 1,
  },
  icon: {
    width: 54,
    height: 73,
    resizeMode: "contain",
  },
  label: {
    marginTop: 6,
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
