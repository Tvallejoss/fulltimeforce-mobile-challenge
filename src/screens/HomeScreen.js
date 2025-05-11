// Hooks
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Components
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import BackgroundPattern from "../components/BackgroundPattern";
import AnimatedProfileCard from "../components/AnimatedProfileCard";

// Constants
import { FILTER_GRADIENTS } from "../constants/gradients";

// Fake Data
import { MOCK_PROFILES } from "../data/mockProfiles";

const FILTERS = [
  {
    id: "friendship",
    label: "Amistad",
    icon: require("../assets/icons/friendship.png"),
  },
  { id: "love", label: "Citas", icon: require("../assets/icons/love.png") },
  {
    id: "relationship",
    label: "Relación",
    icon: require("../assets/icons/relationship.png"),
  },
];

export default function HomeScreen({ navigation }) {
  const [activeFilter, setActiveFilter] = useState("friendship");
  const [profileIndex, setProfileIndex] = useState(0);

  const profiles = MOCK_PROFILES[activeFilter];
  const currentProfile = profiles[profileIndex];
  const nextProfile = profiles[profileIndex + 1];

  const currentGradient = FILTER_GRADIENTS[activeFilter];

  useEffect(() => {
    setProfileIndex(0);
  }, [activeFilter]);

  // Animations Fuctions
  const handleSwipeLeft = () => {
    setProfileIndex((prev) => Math.min(prev + 1, profiles.length - 1));
  };

  const handleSwipeRight = () => {
    setProfileIndex((prev) => Math.min(prev + 1, profiles.length - 1));
  };

  return (
    <LinearGradient colors={currentGradient} style={styles.container}>
      <View style={styles.patternWrapper}>
        <BackgroundPattern color={"#FFFFFF"} />
      </View>

      <View style={styles.container}>
        <Header navigation={navigation} />
        <View style={styles.cardWrapper}>
          {nextProfile && (
            <View style={styles.nextProfileCard}>
              <ProfileCard
                profile={nextProfile}
                filters={FILTERS}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                onDislike={() => {}}
                onLike={() => {}}
                onSuperLike={() => {}}
              />
            </View>
          )}

          {currentProfile && (
            <AnimatedProfileCard
              profile={currentProfile}
              filters={FILTERS}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
            />
          )}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  cardWrapper: {
    marginTop: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  patternWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },

  nextProfileCard: {
    marginTop: -15,
    width: "75%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
});
