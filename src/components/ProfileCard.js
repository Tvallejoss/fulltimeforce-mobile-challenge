// Hooks
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

// Componentes
import FilterButton from "./FilterButton";
import ActionButtons from "./ActionButtons";

const { width, height } = Dimensions.get("window");

export default function ProfileCard({
  filters,
  activeFilter,
  onFilterChange,
  profile,
  onDislike,
  onSuperLike,
  onLike,
}) {
  return (
    <View style={styles.card}>
      {profile?.image && (
        <Image
          source={{ uri: profile.image }}
          style={styles.image}
          resizeMode="cover"
        />
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

      <View style={styles.bottomOverlay}>
        <View style={styles.infoWrapper}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>
              {profile.name}, <Text style={styles.age}>{profile.age}</Text>
            </Text>

            <TouchableOpacity style={styles.iconWrapper}>
              <Image
                source={require("../assets/icons/warning.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.location}>{profile.location}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <ActionButtons
            onDislike={onDislike}
            onLike={onLike}
            onSuperLike={onSuperLike}
          />
        </View>
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
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  filtersWrapper: {
    position: "absolute",
    top: 24,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 10,
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  infoWrapper: {
    alignItems: "center",
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  age: {
    fontWeight: "normal",
  },
  iconWrapper: {
    marginLeft: 8,
    backgroundColor: "#FF4470",
    borderRadius: 20,
    padding: 4,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  location: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
    marginBottom: 12,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  actionButton: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 40,
    elevation: 4,
  },
  heart: {
    backgroundColor: "#FF4470",
  },
  actionIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
