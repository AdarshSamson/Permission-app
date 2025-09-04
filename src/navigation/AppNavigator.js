import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTabs from "./TopTabs";
import CustomHeader from "../components/CustomHeader";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomHeader {...props} />, //  custom header
      }}
    >
  <Stack.Screen 
        name="MainTabs" 
        component={TopTabs} 
        options={{ title: "Profile" }} 
      />
    </Stack.Navigator>
  );
}
