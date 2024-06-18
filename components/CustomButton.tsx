import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CustomButton = ({
  extraBtnClass,
  extraTxtClass,
  label,
  icon,
  iconColor,
  handlePress,
}: any) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-full p-4 rounded-xl flex-row items-center justify-center ${extraBtnClass} ${
        icon ? "gap-3" : ""
      }`}
    >
      {icon && <Ionicons name={icon} size={30} color={iconColor} />}
      <Text className={`uppercase font-pbold text-[18px] ${extraTxtClass}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
