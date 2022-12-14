import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import PlantDetailScreen from "../Screens/PlantDetailScreen"
import HomeTab from "./HomeTab";
import React from "react";
const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeTab" component={HomeTab} />
          <Stack.Screen name="PlantDetailScreen" component={PlantDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default AppNavigation;
  