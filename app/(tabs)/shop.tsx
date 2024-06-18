import { View, Text, FlatList, TouchableOpacity, RefreshControl } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "@/components/Product";
import { meals } from "@/assets/data/meals";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "@/components/CustomInput";

const shop = () => {
  const [Data, setData] = useState([...meals, ...meals, ...meals]);

  useEffect(() => {
    if (Data.length % 2 == 1) {
      setData([...Data, { name: "", img: "", price: 0 }]);
    }
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="absolute top-8 z-10 right-0 left-0 bg-white">
        <View className="pl-6 pr-5 pt-3">
          <CustomInput
            iconLeft="search-outline"
            placeholder="Search beverages or foods"
          />
        </View>
      </View>
      <FlatList
        className="ml-6 mt-24"
        data={Data}
        extraData={Data}
        keyExtractor={(item, index) => `${item}-${index}`}
        numColumns={2}
        ListFooterComponent={() => <View className="pb-10"></View>}
        renderItem={({ item, index }) => {
          return !item?.name ? (
            <View className="flex-1 mr-6 pr-5">
              <Text></Text>
            </View>
          ) : (index + 1) % 2 == 0 ? (
            <Product
              item={item}
              itemClass="flex-1 mr-4 border-2 border-grey1 mb-4  rounded-lg p-2"
              itemPos={index}
            />
          ) : (
            <Product
              item={item}
              itemClass="flex-1 mr-4 border-2 border-grey1 mb-4 rounded-lg p-2"
              itemPos={index}
            />
          );
        }}
        style={{ gap: 10 }}
        refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />}
      />
    </SafeAreaView>
  );
};

export default shop;
