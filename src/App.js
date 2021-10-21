import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import { theme } from "./context";
import { AppRoutes } from "./routes/app.routes";
import { CartProvider } from "./context";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["timer", "perform"]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </ThemeProvider>
  );
}
