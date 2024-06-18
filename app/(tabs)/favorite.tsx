import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { meals } from "@/assets/data/meals";

const Favorite = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Favorites",
      headerTitle: "Favorites",
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
        ListFooterComponent={() => (
          <>
            <View className="h-[1px] bg-grey1"></View>
            <View className="pb-16"></View>
          </>
        )}
        renderItem={({ item, index }) => (
          <View className="p-4 px-6">
            <View className="flex-row items-center gap-6 relative">
              <TouchableOpacity className="absolute -top-1 -left-2 bg-red-500 rounded-xl p-2 z-10">
                <Ionicons name="heart" size={16} color={"#fff"} />
              </TouchableOpacity>

              <Image
                source={{ uri: item.img }}
                className="h-[80px] w-[85px] rounded-xl"
              />

              <View className="flex-1">
                <TouchableOpacity onPress={() => router.push("/details")}>
                  <Text className="text-lg font-psemibold">{item.name}</Text>
                  <View className="gap-2 flex-row items-end">
                    <Text className="font-psemibold text-sm">
                      ${item.price}
                    </Text>
                    <Text className="text-grey3 font-pregular text-sm line-through">
                      ${(item.price + 2).toFixed(2)}
                    </Text>
                  </View>
                </TouchableOpacity>

                <View className="flex-row items-end justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="pricetag" size={14} color="#C88A04" />
                    <Text className="text-[13px] font-pmedium text-yellow-600 ml-2">
                      Disc. 10% Off
                    </Text>
                  </View>

                  <TouchableOpacity className="p-2 rounded-xl justify-center items-center bg-primary">
                    <Ionicons name="cart" size={26} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
