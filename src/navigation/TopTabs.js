import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileScreen from "../screens/profile/ProfileScreen";
import PermissionScreen from "../screens/profile/PermissionScreen";
import EmailScreen from "../screens/profile/EmailScreen";
import colors from "../theme/colors";

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.background,
          height: 32,
          borderRadius: 10,
          marginBottom: 3,
          width: "30%",
          padding: 10,
          marginLeft: 6,
          shadowColor: "#000",
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#7e7878ff",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 13,
          textTransform: "none",
          marginBottom: 50,
          letterSpacing: 0.5,
          marginTop: 1,
        },
        tabBarStyle: {
          backgroundColor: colors.secondary,
          borderRadius: 10,
          marginHorizontal: 18,
          shadow: 0,
          elevation: 0,
          height: 40,
          borderWidth: 1,
          borderColor: "#E5E7EB",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 0,
        },
        tabBarItemStyle: {
          borderRadius: 1,
        },
        swipeEnabled: true,
        lazy: true,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Tab.Screen
        name="Permission"
        component={PermissionScreen}
        options={{ title: "Permissions" }}
      />
      <Tab.Screen
        name="Email"
        component={EmailScreen}
        options={{ title: "Email" }}
      />
    </Tab.Navigator>
  );
}