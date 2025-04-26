import { View, Text, Platform } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";
if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // if the font is not loaded, return null to prevent rendering
  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
