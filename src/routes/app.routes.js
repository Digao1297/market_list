import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Dashboard, Cart, Listing, Product } from "../features";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function AppRoutes() {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator
          initialRouteName="dashboard"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="cart" component={Cart.CartScreen} />
          <Screen name="product" component={Product.ProductScreen} />
          <Screen name="dashboard" component={AppRoutesTabs} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function AppRoutesTabs() {
  const { Screen, Navigator } = createBottomTabNavigator();
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="Produtos"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarActiveTintColor: theme.colors.primary,
      }}
    >
      <Screen
        name="Produtos"
        component={Dashboard.DashboardScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign size={size} color={color} name="home" />
          ),
        }}
      />
      <Screen
        name="Listas"
        component={Listing.ListingScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather size={size} color={color} name="list" />
          ),
        }}
      />
    </Navigator>
  );
}
