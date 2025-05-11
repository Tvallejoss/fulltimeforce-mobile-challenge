import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
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
    translateX.value = withTiming(-400, { duration: 800 });
    translateY.value = withTiming(80, { duration: 800 }, () => {
      runOnJS(onSwipeLeft)();
    });
  };

  const handleLike = () => {
    translateX.value = withTiming(400, { duration: 800 });
    translateY.value = withTiming(80, { duration: 800 }, () => {
      runOnJS(onSwipeRight)();
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
        onSuperLike={() => {}}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animatedWrapper: {
    position: "absolute",
  },
});
