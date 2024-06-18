import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const CustomInput = ({
  iconLeft,
  iconRight,
  placeholder,
  containerClass,
  handleTextChange,
  label,
}: any) => {
  return (
    <>
      {label && <Text className="font-pmedium pb-2">{label}</Text>}
      <View
        className={`flex-row items-center p-4 py-4 rounded-xl bg-grey1 mb-5 ${containerClass}`}
      >
        {iconLeft && (
          <Ionicons name={iconLeft} color={Colors.grey3} size={22} />
        )}
        <TextInput
          className="flex-1 mx-5 text-[16px]"
          placeholder={placeholder}
          placeholderTextColor={Colors.grey3}
          onChangeText={handleTextChange}
        />
        {iconRight && (
          <Ionicons name={iconRight} color={Colors.grey3} size={22} />
        )}
      </View>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
