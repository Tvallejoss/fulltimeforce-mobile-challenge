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
  actionType,
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

      {actionType === "left" && (
        <View style={styles.overlay}>
          <Image
            source={require("../assets/icons/dislike-large.png")}
            style={styles.overlayIcon}
          />
        </View>
      )}

      {actionType === "superlike" && (
        <View style={[styles.overlay, styles.overlaySuperLike]}>
          <Image
            source={require("../assets/icons/super-like-large.png")}
            style={styles.overlayIconLarge}
          />
        </View>
      )}

      {actionType === "right" && (
        <View style={[styles.overlay, styles.overlayRight]}>
          <Image
            source={require("../assets/icons/like-large.png")}
            style={styles.overlayIcon}
          />
        </View>
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
        <View style={styles.textRow}>
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

        <ActionButtons
          onDislike={onDislike}
          onLike={onLike}
          onSuperLike={onSuperLike}
        />
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
    bottom: 36,
    left: 24,
    right: 24,
  },

  textRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
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
    backgroundColor: "#FF4470",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  location: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(147, 142, 144, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    zIndex: 20,
  },

  overlayIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  overlayRight: {
    backgroundColor: "rgba(255, 177, 199, 0.5)",
  },

  overlaySuperLike: {
    backgroundColor: "rgba(255, 177, 199, 0.5)",
  },

  overlayIconLarge: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: -20,
  },
});
