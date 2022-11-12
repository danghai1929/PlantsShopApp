import { View, Text, ScrollView, Image, TouchableOpacity} from "react-native"
import Colors from '../data/color'
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainButton from "../Components/MainButton";
export default function PlantDetailScreen({navigation}){
    const [plant,setplant] = useState('')
    const [amount, setAmount] = useState(1);
    const onGoBack = () => {
        navigation.goBack();
    };
    const getPlantinf = async () => {
        await AsyncStorage.getItem("curPlant")
        .then((value) => setplant(JSON.parse(value)));
    };
    useEffect(() => {
        getPlantinf()
    }, []);
    const addToCart = async () => {
    let cartData = await AsyncStorage.getItem("cartData");
    if (cartData) {
        cartData = JSON.parse(cartData);
        cartData.push({
            id: plant.id,
            name: plant.name,
            image: plant.image,
            price: plant.price,
            amount: amount,
        });
    } else {
        cartData = [];
        cartData.push({
            id: plant.id,
            name: plant.name,
            image: plant.image,
            price: plant.price,
            amount: amount,
        });
    }
    AsyncStorage.setItem("cartData", JSON.stringify(cartData));
    };
    return(
        <ScrollView style={{ backgroundColor: "#fff", flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ position: "relative" }}>
            <Image
                style={{ width: "100%", height: 300 }}
                source={{ uri: plant.image }}
            />
            <TouchableOpacity
                onPress={onGoBack}
                style={{
                    backgroundColor: "#ffffff60",
                    position: "absolute",
                    top: 30,
                    left: 12,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100,
                }}
            >
                <Ionicons name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>{plant.name}</Text>
            <Text
                style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    marginTop: 25,
                }}
            >
            MÔ TẢ
            </Text>
            <Text
                style={{
                    color: "gray",
                }}
            >
                {plant.description}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View>
                    <Text
                        style={{
                            fontSize: 10,
                            fontWeight: "bold",
                            marginLeft: 12,
                        }}
                    >
                        SỐ LƯỢNG
                    </Text>
                    <View
                        style={{
                            backgroundColor: "#F4F4F4",
                            paddingHorizontal: 16,
                            borderRadius: 100,
                            marginTop: 4,
                            width: 150,
                            paddingVertical: 8,
                            flexDirection: "row",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                if (amount > 1) setAmount((val) => val - 1);
                            }}
                        >
                            <Ionicons name="remove" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={{flex: 1 , textAlign:'center', textAlignVertical: 'center'}}>{amount}</Text>
                        <TouchableOpacity
                            onPress={() => {
                            setAmount((val) => val + 1);
                            }}
                        >
                            <Ionicons name="add" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontSize: 10,
                            textAlign: "right",
                            fontWeight: "bold",
                        }}
                    >
                        TỔNG
                    </Text>
                    <Text
                        style={{
                            lineHeight: 46,
                            fontSize: 20,
                            textAlign: "right",
                            fontWeight: "bold",
                        }}
                    >
                        {plant.price * amount} VND
                    </Text>
                </View>
            </View>
            <MainButton
                onPress={addToCart}
                style={{ marginTop: 30 }}
                title={"THÊM VÀO GIỎ"}
            />
        </View>
    </ScrollView>      
    );
}