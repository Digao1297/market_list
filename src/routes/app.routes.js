import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Auth } from "../features";

export function AppRoutes() {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="initial"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="initial" component={Auth.InitialAuthScreen} />
      <Screen name="signin" component={Auth.SignInScreen} />
    </Navigator>
  );
}
