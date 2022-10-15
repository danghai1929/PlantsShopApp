import React from "react";
import { View, Text, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../data/color'
export default function MainInput(props) {
  const {
    nameIcon,
    value,
    onChangeText,
    placeholder,
    onEndEditing,
    secureTextEntry,
  } = props;
  return (
    <View style={{flexDirection: "row"}}>
      <View style={{paddingVertical: 7, paddingHorizontal: 7, width: 40, alignItems: 'center',}}>
        <FontAwesome style={{color: Colors.main, textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: {width: 0, height: 1},
          textShadowRadius: 5 }} name={nameIcon} size={24}
        />
      </View>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: "#f4f4f4",
          paddingVertical: 7,
          borderRadius: 20,
          paddingHorizontal: 20,
          marginBottom: 14,
          width: 200,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
