import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";

const Product = ({ item, itemClass, itemPos }: any) => {
  return (
    <View className={itemClass}>
      <TouchableOpacity activeOpacity={1} onPress={() => {router.push('/details')}}>
        <Image
          className="w-full h-[120px] rounded-lg mb-3"
          source={{
            uri: item.img,
          }}
          resizeMode="cover"
        />
        <Text className="text-center font-psemibold text-dark/70 text-[15px]">
          {item.name}
        </Text>
        <View className="flex-row justify-between items-center mt-2 mb-3">
          <Text className="text-orange-400 font-psemibold text-[14px]">
            $10.98
          </Text>
          <View className="flex-row gap-1 items-center">
            <Text>(243)</Text>
            <Ionicons name="star" size={15} color={Colors.primary} />
          </View>
        </View>
      </TouchableOpacity>

      {itemPos % 2 == 0 ? (
        <TouchableOpacity className="px-4 py-2 bg-primary-light rounded-xl">
          <Text className="text-center text-primary font-rbmedium">
            Add to Cart
          </Text>
        </TouchableOpacity>
      ) : (
        <View className="flex-row justify-between items-center">
          <TouchableOpacity className="px-3 py-2 bg-primary rounded-xl">
            <Ionicons name="add" color="#fff" size={16} />
          </TouchableOpacity>

          <Text className="flex-1 text-center">{2}</Text>

          <TouchableOpacity className="px-3 py-2 bg-primary rounded-xl">
            <Ionicons name="remove" color="#fff" size={16} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
