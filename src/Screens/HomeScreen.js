import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import Colors from '../data/color'
export default function HomeScreen({ navigation }){
    const [plantID, setplantID] = useState('')
    const [plantName, setplantName] = useState('')
    const [plantDescription, setplantDescription] = useState('')
    const [plantPrice, setplantPrice] = useState('')
    return(
        <View style={styles.container}>
            <View style={{ backgroundColor: Colors.white, flexDirection: "row", height: 100, alignItems:"center", justifyContent: 'center', ...styles.shadow }}>
                <FontAwesome 
                    style={{
                        color: Colors.main, 
                        paddingHorizontal: 6,
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
            <View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.main,
    },
    searchInput: {
        backgroundColor: Colors.main,
        color: Colors.white,
        width: 250,
        paddingVertical: 7,
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    shadow: {
        paddingTop: 10,
        shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4, 
    },
});