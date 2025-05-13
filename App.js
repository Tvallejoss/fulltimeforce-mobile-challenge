import React, { useEffect, useCallback, useState } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./src/AppNavigator";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { MavenPro_700Bold } from "@expo-google-fonts/maven-pro";
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        MavenPro_700Bold,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_700Bold,
      });

      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    }

    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
}
