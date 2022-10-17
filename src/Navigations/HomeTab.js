import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import Colors from '../data/color';
import CartScreen from '../Screens/CartScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import HomeScreen from '../Screens/HomeScreen';
const Tab = createBottomTabNavigator();
export default function HomeTab() {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 20,
                left: 15,
                right: 15,
                elevation: 0,
                backgroundColor: Colors.white,
                borderRadius: 15,
                height: 60,
                ...styles.shadow,
            }
        }}
    >
        <Tab.Screen name='Home' component={HomeScreen} 
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome 
                            style={{ color: focused ? Colors.main : Colors.deepestGray }} 
                            resizeMode= "contain"
                            name="home" 
                            size={24} 
                            color="black" 
                        />
                        <Text style={{ color: focused ? Colors.main : Colors.deepestGray }}>Home</Text>
                    </View>
                ),
            }}
        />
        <Tab.Screen name='Cart' component={CartScreen} 
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome 
                            style={{ color: focused ? Colors.main : Colors.deepestGray }} 
                            resizeMode= "contain"
                            name="shopping-cart" 
                            size={24} 
                            color="black" 
                        />
                        <Text style={{ color: focused ? Colors.main : Colors.deepestGray }}>Cart</Text>
                    </View>         
                ),
            }}
        />
        <Tab.Screen name='Profile' component={ProfileScreen} 
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome 
                            style={{ color: focused ? Colors.main : Colors.deepestGray }} 
                            resizeMode= "contain"
                            name="user" 
                            size={24} 
                            color="black" 
                        />
                        <Text style={{ color: focused ? Colors.main : Colors.deepestGray }}>Profile</Text>
                    </View>
                ),
            }}
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});