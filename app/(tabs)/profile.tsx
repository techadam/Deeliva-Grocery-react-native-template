import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarImg from "@/assets/images/avatar.png";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      <ScrollView className="h-full px-6 py-3" style={{ paddingBottom: 100 }}>
        <View className="flex-row items-center bg-[#f4f5f5] p-3 rounded-xl overflow-hidden mb-6">
          <Image source={AvatarImg} className="w-16 h-16 mr-3" />
          <View className="flex-1">
            <Text className="font-psemibold">John Doe</Text>
            <Text className="font-pmedium">johndoe@ymail.com</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="pencil" size={22} />
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <Text className="font-psemibold text-[18px]">General</Text>

          <View className="bg-[#f4f5f5] px-3 py-1 mt-3 rounded-xl">
            <TouchableOpacity
              className="flex-row items-center border-b border-b-grey1 py-3"
              onPress={() => {
                router.push("/orders");
              }}
            >
              <Ionicons name="bag-handle-outline" size={22} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium">My Orders</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} />
              </TouchableOpacity>
            </TouchableOpacity>
            <View className="flex-row items-center border-b border-b-grey1 py-3">
              <Ionicons name="map-outline" size={22} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium">Location</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center border-b border-b-grey1 py-3">
              <Ionicons name="navigate-circle-outline" size={22} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium">Pickup location</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center border-b border-b-grey1 py-3">
              <Ionicons name="qr-code-outline" size={22} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium">Scan QR code</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center py-3">
              <Ionicons name="lock-closed-outline" size={22} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium">Change password</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="mb-4">
          <Text className="font-psemibold text-[18px]">Support</Text>

          <View className="bg-[#f4f5f5] px-3 py-1 mt-3 rounded-xl">
            <View className="flex-row items-center border-b border-b-grey1 py-3">
              <Ionicons name="chatbubbles-outline" size={22} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium">Need help? Let's Chat</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center border-b border-b-grey1 py-3">
              <Ionicons name="alarm-outline" size={22} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium">Order Protection Quarantee</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center py-3">
              <Ionicons name="information-circle-outline" size={22} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium">Privacy Policy</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="bg-[#f4f5f5] px-3 py-1 mt-3 rounded-xl">
          <TouchableOpacity
            onPress={() => {
              router.replace("/");
            }}
            className="flex-row items-center py-3"
          >
            <Ionicons
              name="log-out-outline"
              size={22}
              color="rgb(239, 68, 68)"
            />
            <View className="flex-1 ml-3">
              <Text className="font-pmedium text-red-500">Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="pb-12"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
