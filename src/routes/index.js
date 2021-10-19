import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { Auth } from "../features";

export function Routes() {
  const { userState } = Auth.useAuth();

  return (
    <NavigationContainer>
      {userState.id ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
