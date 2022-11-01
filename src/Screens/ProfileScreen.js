import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import Colors from '../data/color'
export default function ProfileScreen({ navigation }){
  const [user,setuser] = useState('')
  const Logout = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };
  const getUserinf = async () => {
    await AsyncStorage.getItem("curUser")
    .then((value) => setuser(JSON.parse(value)));
  };
  useEffect(() => {
    getUserinf()
  }, []);
  return(
    <View style={styles.container}>
      <View style={styles.homeProfile}>
        <View style={{marginBottom: 25}}>
          <Image style={{width: 125, height: 125, borderRadius: 100}} source={require('../../assets/avatar.jpg')}/>
          <Text style={styles.name}> {user.name}</Text>
          <Text style={styles.faxname}> @{user.name}</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.icon}>
            <FontAwesome name="phone" size={24} color="black"/>
          </View>
          <Text  style={styles.itemName}> {user.phone}</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.icon}>
            <FontAwesome name="envelope" size={24} color="black"/>
          </View>
          <Text  style={styles.itemName}> {user.email}</Text>
        </View>
          <TouchableOpacity onPress={Logout}>
              <Text style={styles.LogoutButton}>Log out</Text>
          </TouchableOpacity>
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: Colors.main,
  },
  homeProfile:{
      backgroundColor: Colors.white,
      flexDirection: "column",
      alignItems:"center",
      justifyContent: 'center',
      borderRadius: 15,
      top: 65,
      left: 15,
      right: 15,
      position: 'absolute',
  },
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4, 
  },
  heading:{
    color: Colors.white,
  },
  name:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  faxname:{
    color: '#777777',
    textAlign: 'center',
  },
  item:{
    flexDirection: 'row',
  },
  icon:{
    paddingVertical: 7,
  },
  itemName: {
    backgroundColor: Colors.white,
    fontSize: 25,
  },
  LogoutButton:{
    marginTop: 50,
    marginBottom: 5,
    fontSize: 25,
    backgroundColor: Colors.red, 
    color: Colors.white, 
    fontWeith: 'bold',
    textAlign: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
});