import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from '../data/color'
export default function MainButton(props) {
  const { title, onPress, style, isSubButton, onPressFunc } = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style,
        ...(isSubButton && styles.subButton),
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.title, color: isSubButton ? "#2FDBBC" : "#fff" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: Colors.main,
    borderRadius: 100,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  subButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#2FDBBC",
    borderRadius: 100,
  },
});
