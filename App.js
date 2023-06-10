import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import GithubScreen from "./screens/GithubScreen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";


const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            statusBarColor: "#2d333b",
            statusBarStyle: "white",
          }}
        />
        <Stack.Screen
          name="Github"
          component={GithubScreen}
          options={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#2d333b" },
            statusBarColor: "#2d333b",
            statusBarStyle: "white",
            headerTintColor: "white",
            // elevation: 0,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
