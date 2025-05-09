// Hooks
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Components
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

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
  const [currentProfile, setCurrentProfile] = useState(
    MOCK_PROFILES["friendship"][0]
  );

  const currentGradient = FILTER_GRADIENTS[activeFilter];

  useEffect(() => {
    const newProfile = MOCK_PROFILES[activeFilter][0];
    setCurrentProfile(newProfile);
  }, [activeFilter]);

  return (
    <LinearGradient colors={currentGradient} style={styles.container}>
      <View style={styles.container}>
        <Header navigation={navigation} />

        <View style={styles.cardWrapper}>
          <ProfileCard
            profile={currentProfile}
            filters={FILTERS}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
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
});
