import { View, Text,  } from "react-native"
import React from 'react'
import MainButton from '../Components/MainButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }){
    const Logout = async () => {
        await AsyncStorage.removeItem("curUser");
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        });
      };
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>  ProfileScreen </Text>
            <MainButton
            style={{ 
                marginTop: 10,
                width: 130, 
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4, 
              }}
            title="Đăng xuất"
            onPress={Logout}
            />
        </View>
    );
}