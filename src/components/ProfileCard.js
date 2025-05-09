// Hooks
import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

// Components
import FilterButton from "./FilterButton";

const { width, height } = Dimensions.get("window");

export default function ProfileCard({
  filters,
  activeFilter,
  onFilterChange,
  profile,
}) {
  return (
    <View style={styles.card}>
      {profile?.image && (
        <Image source={{ uri: profile.image }} style={styles.image} />
      )}

      <View style={styles.filtersWrapper}>
        {filters.map((item) => (
          <FilterButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={item.id === activeFilter}
            onPress={() => onFilterChange(item.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.82,
    height: height * 0.78,
    backgroundColor: "#ccc",
    borderRadius: 30,
    alignSelf: "center",
    overflow: "hidden",
  },
  filtersWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
