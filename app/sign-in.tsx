import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Link, router } from "expo-router";

const Index = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <SafeAreaView className="flex-1" edges={["bottom"]}>
      <ScrollView className="h-full bg-white">
        <View className="items-center bg-primary px-8 py-16 relative flex-none">
          <Text className="text-[40px] font-pbold text-white -mb-1 mt-4">
            Deeliva
          </Text>
          <Text className="text-white text-[18px]">Grocery app</Text>
        </View>

        <View className="bg-white relative z-10 -top-7 rounded-t-3xl p-8 py-6 flex-1">
          <Text className="text-[28px] font-pbold -mb-1">Welcome back</Text>
          <Text className="text-[15px] text-grey3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia {form.username}
          </Text>

          <View className="mt-8">
            <CustomInput
              iconLeft="person"
              placeholder="Louisanderson"
              handleTextChange={(e: any) => setForm({ ...form, username: e })}
            />

            <CustomInput
              iconLeft="lock-closed"
              iconRight="eye"
              placeholder="********"
            />

            <View className="mb-3"></View>

            <CustomButton
              extraBtnClass="bg-primary shadow-xl shadow-primary mb-6"
              extraTxtClass="text-white"
              label="Sign in"
              handlePress={() => router.push('/(tabs)/home')}
            />

            <View className="flex-row justify-between items-center mb-5">
              <View className="space-x-2">
                <BouncyCheckbox
                  size={20}
                  fillColor={Colors.primary}
                  unFillColor="#FFFFFF"
                  textComponent={
                    <Text className="font-rbmedium text-[15px] ml-2">
                      Keep Signed In
                    </Text>
                  }
                  iconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 4 }}
                  isChecked={true}
                  onPress={(isChecked: boolean) => {
                    console.log(isChecked);
                  }}
                />
              </View>

              <Link href={"/"} asChild>
                <Text className="font-rbmedium text-[15px] text-primary underline">
                  Forgot Password?
                </Text>
              </Link>
            </View>

            <View className="mb-4">
              <Text className="text-[15px] text-center text-grey4 font-bold">
                Don't have an account?
              </Text>
            </View>

            <CustomButton
              extraBtnClass="bg-white border border-primary"
              extraTxtClass="text-primary"
              label="Create account"
              handlePress={() => router.push("/sign-up")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
