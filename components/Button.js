import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
export const Button = ({
  text,
  width,
  handleClick,
  color,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
        borderRadius: 10,
        backgroundColor: backgroundColor,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handleClick}
    >
      <Text style={{ color: color, textAlign: "center", fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const BackBtn = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text>{"<"}</Text>
      <Text>Go Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    width: 85,
    height: 32,
    paddingHorizontal: 8,
    borderRadius: 100,
    marginBottom: 30,
  },
});
