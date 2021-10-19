import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Dashboard } from "../features";

export function AuthRoutes() {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Dashboard" component={Dashboard.DashboardScreen} />
    </Navigator>
  );
}
