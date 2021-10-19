import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Dashboard } from "../features";

export function AppRoutes() {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="dashboard"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="dashboard" component={Dashboard.DashboardScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
