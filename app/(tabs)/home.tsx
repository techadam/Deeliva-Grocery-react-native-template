import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { meals, categories, promos } from "@/assets/data/meals";
import Product from "@/components/Product";

const Home = () => {
  const [Data, setData] = useState(meals);

  useEffect(() => {
    if (Data.length % 2 == 1) {
      setData([...Data, { name: "", img: "", price: 0 }]);
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <FlatList
          className="ml-6"
          data={Data}
          extraData={Data}
          keyExtractor={(item, index) => `${item}-${index}`}
          numColumns={2}
          ListHeaderComponent={() => (
            <>
              <View className="flex-row flex-1 items-center justify-between pt-6 pb-3 pr-6">
                <View>
                  <Text className="text-[15px] font-rbmedium text-dark/70">
                    Good morning
                  </Text>
                  <Text className="font-pbold text-[35px]">Loius A.</Text>
                </View>

                <View className="flex-row items-center">
                  <View
                    className="h-[45px] w-[55px] bg-grey1 items-center justify-center pr-4 -mr-3"
                    style={{
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50,
                    }}
                  >
                    <Text className="pl-3 text-lg font-rbbold">6</Text>
                  </View>
                  <View className="h-[55px] w-[55px] rounded-full bg-white p-1">
                    <View className="h-full w-full bg-yellow-600 items-center justify-center rounded-full">
                      <Ionicons name="notifications" color="#fff" size={25} />
                    </View>
                  </View>
                </View>
              </View>

              <View className="flex-row items-center space-x-3 border border-grey1 mb-5 px-4 py-3 mr-6 rounded-xl">
                <Ionicons
                  name="search-outline"
                  size={24}
                  color={Colors.grey4}
                />
                <TextInput
                  placeholder="Search beverages or foods"
                  placeholderTextColor={Colors.grey4}
                />
              </View>

              <ScrollView horizontal className="mb-8">
                {promos.map((uri, index) => (
                  <View
                    className="w-[280px] h-[160px] mr-5 rounded-xl overflow-hidden"
                    key={index}
                  >
                    <Image
                      source={{ uri }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </View>
                ))}
              </ScrollView>

              <View className="mb-4 flex-row justify-between items-center pr-4">
                <Text className="font-rbbold text-xl text-dark/80">
                  Categories
                </Text>

                <Link href={"/categories"} asChild>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={Colors.grey4}
                  />
                </Link>
              </View>
              <ScrollView horizontal className="mb-10">
                {categories.map((category, i) => (
                  <Link href={"/products"} key={i} asChild>
                    <TouchableOpacity className="w-[90px] h-[95px] mr-3 rounded-xl overflow-hidden relative">
                      <Image
                        source={{ uri: category.img }}
                        className="w-full h-full"
                        resizeMode="cover"
                      />
                      <View
                        className={`absolute z-10 top-0 left-0 bottom-0 right-0 justify-center items-center`}
                        style={{ backgroundColor: category.bgColor }}
                      >
                        <View className="items-center">
                          <Ionicons
                            name={category.icon}
                            size={26}
                            color={"#fff"}
                            className="mx-auto"
                          />
                          <Text className="text-white font-psemibold text-[16px]">
                            {category.name}
                          </Text>
                          <Text className="text-white -top-1 text-xs">
                            45 items
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </Link>
                ))}
              </ScrollView>
            </>
          )}
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
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
