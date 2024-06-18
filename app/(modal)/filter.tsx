import { StyleSheet, Text, View, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import StarRating from "react-native-star-rating-widget";
import { Ionicons } from "@expo/vector-icons";
import { categories } from "@/assets/data/meals";
import CustomButton from "@/components/CustomButton";

const filter = () => {
  const [rating, setRating] = useState(3.5);
  const checkoptions = [
    {
      label: "Discount",
      checked: true,
    },
    {
      label: "Voucher",
      checked: false,
    },
    {
      label: "Free Shipping",
      checked: false,
    },
    {
      label: "Same Day Deliv.",
      checked: true,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      <ScrollView className="h-full px-6">
        <View className="border-b border-b-grey1">
          <Text className="my-4 font-bold text-[15px]">Price Range</Text>
          <View className="flex-row" style={{ gap: 12 }}>
            <CustomInput containerClass="flex-1" placeholder="$5.00" />
            <CustomInput containerClass="flex-1" placeholder="Max" />
          </View>
        </View>

        <View className="border-b border-b-grey1">
          <Text className="my-4 font-bold text-[15px]">Star Ratings</Text>
          <View className="pb-5">
            <StarRating rating={rating} color="#fea903" onChange={setRating} />
          </View>
        </View>

        <View className="border-b border-b-grey1">
          <Text className="my-4 font-bold text-[15px]">Others</Text>
          <View className="flex-row flex-wrap" style={{ gap: 10 }}>
            {checkoptions.map((item, index) => (
              <View className="w-[48%] mb-5" key={index}>
                <BouncyCheckbox
                  style={{ alignItems: "flex-start" }}
                  size={20}
                  fillColor={Colors.primary}
                  unFillColor="#FFFFFF"
                  textComponent={
                    <Text className="text-md font-semibold pl-3">
                      {item.label}
                    </Text>
                  }
                  iconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 4 }}
                  isChecked={item.checked}
                  onPress={(isChecked: boolean) => {
                    console.log(isChecked);
                  }}
                />
              </View>
            ))}
          </View>
        </View>

        <View className="pb-32">
          <Text className="my-4 font-bold text-[15px]">Categories</Text>
          {categories.map((category, index) => (
            <View className="py-3" key={index}>
              <View
                className="flex-row items-center justify-center"
                style={{ gap: 5 }}
              >
                <View className="flex-row flex-1 gap-4">
                  <Ionicons
                    name={category.icon}
                    size={20}
                    color={Colors.primary}
                  />
                  <Text className="font-bold text-[14px]">{category.name}</Text>
                </View>
                <View className="flex-row gap-1">
                  <Text className="font-bold text-[14px] text-grey4">
                    45 Items
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={Colors.grey4}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View className="absolute bottom-0 right-0 left-0 px-6 bg-white py-2 border-t border-t-grey1">
        <CustomButton
          extraBtnClass="bg-primary shadow-xl shadow-primary"
          extraTxtClass="text-white"
          label="Apply filters"
          handlePress={() => router.push("/categories")}
        />
      </View>
    </SafeAreaView>
  );
};

export default filter;

const styles = StyleSheet.create({});
