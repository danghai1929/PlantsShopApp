import { View, Text, TextInput, StyleSheet,TouchableWithoutFeedback, Keyboard } from "react-native"
import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import Colors from '../data/color'
export default function HomeScreen({ navigation }){
    const [plantID, setplantID] = useState('')
    const [plantName, setplantName] = useState('')
    const [plantDescription, setplantDescription] = useState('')
    const [plantPrice, setplantPrice] = useState('')
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
                <View>
                    
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
});