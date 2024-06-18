import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { meals } from "@/assets/data/meals";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";

const cart = () => {
  const navigation = useNavigation();
  const [cartQty, setCartQty] = useState(5);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Shopping Cart",
      headerTitle: () => (
        <View className="flex-row gap-1 items-center">
          <Text className="text-[21px] font-psemibold pt-1">Cart</Text>
          <Text className="text-primary text-sm font-bold">({cartQty})</Text>
        </View>
      ),
      headerShadowVisible: false,
      headerTitleStyle: {
        fontFamily: "Poppins-SemiBold",
      },
      headerRight: () => (
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical-outline" size={24} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      <FlatList
        className="h-full"
        data={meals}
        keyExtractor={(item, index) => `${item}-${index}`}
        ItemSeparatorComponent={() => (
          <View className="h-[1px] bg-grey1"></View>
        )}
        renderItem={({ item, index }) => (
          <View className="p-4 px-6">
            <View className="flex-row items-start gap-4">
              <Image
                source={{ uri: item.img }}
                className="h-[60px] w-[60px] rounded-xl"
              />

              <View className="flex-1">
                <TouchableOpacity onPress={() => router.push("/home")}>
                  <Text className="text-lg font-psemibold">{item.name}</Text>
                  <View className="">
                    <Text className="text-grey3 font-pregular text-sm">
                      Fruit
                    </Text>
                  </View>
                </TouchableOpacity>

                <View className="flex-row items-end justify-between">
                  <View className="gap-2 flex-row items-end">
                    <Text className="font-psemibold text-sm">
                      ${item.price}
                    </Text>
                    <Text className="text-grey3 font-pregular text-sm line-through">
                      ${(item.price + 2).toFixed(2)}
                    </Text>
                  </View>

                  <View className="flex-row justify-between items-center">
                    <TouchableOpacity className="px-3 py-3 bg-white border border-grey1 rounded-xl">
                      <Ionicons name="remove" color="#000" size={16} />
                    </TouchableOpacity>

                    <Text className="w-10 text-center text-lg font-pmedium">
                      {2}
                    </Text>

                    <TouchableOpacity className="px-3 py-3 bg-primary-light border border-primary-light rounded-xl">
                      <Ionicons name="add" color={Colors.primary} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <>
            <View className="h-[1px] bg-grey1 mb-8"></View>
            <View className="px-6">
              <View className="pb-28 border-t border-[#cfd8dc] border-dashed pt-6">
                <View className="flex-row items-center justify-between mb-2 gap-2">
                  <Text className="text-grey4 font-bold text-[16px]">
                    Subtotal
                  </Text>
                  <Text className="text-grey4 font-bold text-[16px]">
                    $54.76
                  </Text>
                </View>
                <View className="flex-row items-center justify-between gap-2">
                  <Text className="text-grey4 font-bold text-[16px]">
                    TAX (2%)
                  </Text>
                  <Text className="text-grey4 font-bold text-[16px]">
                    -$1.08
                  </Text>
                </View>
                <View className="flex-row items-center justify-between gap-2 my-3">
                  <Text className="font-psemibold text-[20px]">
                    Total
                  </Text>
                  <Text className="font-psemibold text-[20px]">
                    $53.68
                  </Text>
                </View>
                <View className="flex-row justify-between items-center p-4 pt-3 px-6 rounded-xl bg-primary-light">
                  <Text className="text-[14px]">
                    Apply promotion code
                  </Text>
                  <Text className="text-[14px] text-primary font-bold">
                    2 Promos
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      />

      <View className="absolute bottom-0 right-0 left-0 px-6 bg-white py-2">
        <CustomButton
          extraBtnClass="bg-primary shadow-xl shadow-primary"
          extraTxtClass="text-white"
          label="Checkout"
          handlePress={() => router.push("/checkout")}
        />
      </View>
    </SafeAreaView>
  );
};

export default cart;

const styles = StyleSheet.create({});
