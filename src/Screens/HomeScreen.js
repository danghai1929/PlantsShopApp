import { View, Text, TextInput, StyleSheet,TouchableWithoutFeedback, Keyboard, ScrollView, Image, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import Colors from '../data/color'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function HomeScreen({ navigation }){
    const [plants, setplants] = useState([])
    useEffect(() => {
        fetch('http://192.168.0.102:3000/plants')
          .then((response) => response.json())
          .then((plants) => setplants(plants))
          .catch((error) => console.error(error))
      }, []);
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{ ...styles.homeSearch , ...styles.shadow }}>
                    <FontAwesome 
                        style={{
                            color: Colors.main, 
                            paddingRight: 5,
                            textShadowColor: 'rgba(0, 0, 0, 0.75)', 
                            textShadowOffset: {width: 1, height: 1},
                            textShadowRadius: 5,
                            height:30,
                            width:38,
                        }} 
                        name="search" size={26}
                    />
                        <TextInput style={{...styles.searchInput, ...styles.shadow}} placeholder="Sen đá, xương rồng,..." placeholderTextColor={Colors.white}/>
                </View>
                <View style={{ top: 100, left: 15,right: 15, bottom: 90 ,position: 'absolute',}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            plants.map(plant => (
                                <TouchableOpacity key = {plant.id} 
                                    onPress={async ()=>{
                                        await AsyncStorage.setItem('curPlant', JSON.stringify(plant));
                                        navigation.navigate('PlantDetailScreen');
                                    }}
                                >
                                    <View  style = {styles.item}>
                                        <Image style={styles.plantimage} source={{uri:plant.image}}/>
                                        <View style={styles.flashdetail}>
                                            <Text style={styles.plantname}>{plant.name}</Text>
                                            <Text style={styles.plantprice}>{plant.price} đ</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.main,
    },
    homeSearch:{
        backgroundColor: Colors.white,
        flexDirection: "row",
        height: 75,
        alignItems:"center",
        justifyContent: 'center',
        borderRadius: 15,
        top: 12,
        left: 15,
        right: 15,
        position: 'absolute',
    },
    searchInput: {
        backgroundColor: Colors.main,
        color: Colors.white,
        width: 260,
        paddingVertical: 7,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginRight:5,
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
    flashdetail: {
        width: 150,
        alignItems:"center",
        justifyContent: 'center',    
    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 7,
        margin: 2,
        borderColor: '#2a4944',
        backgroundColor: Colors.white,
        
    },
    plantimage: {
        width: 80,
        height: 80,
    },
    plantname:{
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    plantprice: {
        color: Colors.orange,
        fontWeight: 'bold',
    }
});