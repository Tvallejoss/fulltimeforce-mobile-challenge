// Hooks
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

// Components
import ProfileCard from "./ProfileCard";

export default function AnimatedProfileCard({
  profile,
  filters,
  activeFilter,
  onFilterChange,
  onSwipeLeft,
  onSwipeRight,
}) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const [actionType, setActionType] = useState(null);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotateZ: `${translateX.value * 0.0015}rad` },
    ],
  }));

  useEffect(() => {
    translateX.value = 0;
    translateY.value = 0;
  }, [profile]);

  const handleDislike = () => {
    runOnJS(setActionType)("left");
    translateX.value = withTiming(-400, { duration: 800 });
    translateY.value = withTiming(80, { duration: 800 }, () => {
      runOnJS(onSwipeLeft)();
      runOnJS(setActionType)(null);
    });
  };

  const handleSuperLike = () => {
    runOnJS(setActionType)("superlike");

    setTimeout(() => {
      runOnJS(setActionType)(null);
    }, 1000);
  };

  const handleLike = () => {
    runOnJS(setActionType)("right");
    translateX.value = withTiming(400, { duration: 800 });
    translateY.value = withTiming(80, { duration: 800 }, () => {
      runOnJS(onSwipeRight)();
      runOnJS(setActionType)(null);
    });
  };

  return (
    <Animated.View style={[styles.animatedWrapper, animatedStyle]}>
      <ProfileCard
        profile={profile}
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
        onDislike={handleDislike}
        onLike={handleLike}
        onSuperLike={handleSuperLike}
        actionType={actionType}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animatedWrapper: {
    position: "absolute",
  },
});
