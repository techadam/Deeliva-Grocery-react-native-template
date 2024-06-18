import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "@/assets/data/meals";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Categories = () => {
  const [categoryData, setCategoryData] = useState(categories);
  return (
    <SafeAreaView className="bg-white flex-1">
      <FlatList
        className="h-full px-6"
        data={categoryData}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => router.push('/products')}
            className={`relative overflow-hidden flex-1 mb-4 ${
              (index + 1) % 2 == 0 ? "ml-2" : "mr-2"
            }  h-[135px] rounded-xl`}
          >
            <Image
              source={{ uri: item.img }}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View
              className={`absolute z-10 top-0 left-0 bottom-0 right-0 justify-center items-center`}
              style={{ backgroundColor: item.bgColor }}
            >
              <View className="items-center">
                <Ionicons
                  name={item.icon}
                  size={26}
                  color={"#fff"}
                  className="mx-auto"
                />
                <Text className="text-white font-psemibold text-[16px]">
                  {item.name}
                </Text>
                <Text className="text-white -top-1 text-xs">45 items</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
