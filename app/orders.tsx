import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import PagerView from "react-native-pager-view";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { orders } from "@/assets/data/meals";

const Orders = () => {
  const [page, setPage] = useState(0);
  const viewPager = useRef<any>(null);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();
  const pagerTitles = ["All", "On Delivery", "Completed", ""];
  const pagerTitlesColor = [Colors.secondary, "#feab02", Colors.primary, ""];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Ionicons name="search-outline" size={25} />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    viewPager.current?.setPage(page);
    flatListRef.current?.scrollToIndex({ index: page });
  }, [page]);

  return (
    <>
      <View className="bg-white">
        <FlatList
          className="px-6"
          horizontal
          ref={flatListRef}
          data={pagerTitles}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item: title, index }) => (
            <TouchableOpacity onPress={() => setPage(index)}>
              <View
                className={`pt-2 ${
                  title ? "pr-6 pl-3" : "px-4"
                } flex-row justify-center items-center`}
              >
                {title && (
                  <Ionicons
                    name="ellipse"
                    size={13}
                    color={pagerTitlesColor[index]}
                  />
                )}
                <Text className="pl-2 font-pmedium">{title}</Text>
              </View>
              {title && (
                <View
                  className={`h-[4px] rounded-xl mt-2 ${
                    page == index ? "bg-primary" : "bg-[#eee] "
                  }`}
                ></View>
              )}
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View className="w-2"></View>}
        />
      </View>

      <PagerView
        useNext={true}
        scrollEnabled={true}
        style={styles.pagerView}
        ref={viewPager}
        initialPage={page}
        onPageSelected={(e) => {
          setPage(e.nativeEvent.position);
        }}
      >
        <View key="1" className="flex-1 py-4 bg-white">
          <FlatList
            data={orders}
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={({ item: order, index }) => (
              <View>
                <View className="flex-row items-center justify-between px-6 py-5">
                  <View
                    className={`mr-4 justify-center items-center h-[55px] w-[60px] rounded-xl ${order.iconContainerBg}`}
                  >
                    <Ionicons
                      name={order.icon}
                      size={24}
                      color={order.iconColor}
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="font-psemibold text-[16px]">
                      Order ID {order.id}
                    </Text>
                    <View className="flex-row items-center mt-1">
                      <Text className="font-pmedium text-grey4">
                        {order.itemQty} Items
                      </Text>
                      <View className="mx-2">
                        <Ionicons
                          name="ellipse"
                          color={Colors.grey4}
                          size={8}
                        />
                      </View>
                      <Text className="font-pmedium text-grey4">
                        {order.status}
                      </Text>
                    </View>
                  </View>
                  <Ionicons
                    name={
                      index == 0 ? `chevron-up-outline` : `chevron-down-outline`
                    }
                    size={24}
                    color={Colors.grey4}
                  />
                </View>
                {index == 0 && (
                  <View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Order Confirmed
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Your Order on Delivery by Courier
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Order Delivered
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Order Placed
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-grey1"></View>
            )}
            ListFooterComponent={() => <View className="pb-10"></View>}
          />
        </View>
        <View key="2" className="flex-1 py-4 bg-white">
          <FlatList
            data={orders.filter((order) => order.status == "On Delivery")}
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={({ item: order, index }) => (
              <View>
                <View className="flex-row items-center justify-between px-6 py-5">
                  <View
                    className={`mr-4 justify-center items-center h-[55px] w-[60px] rounded-xl ${order.iconContainerBg}`}
                  >
                    <Ionicons
                      name={order.icon}
                      size={24}
                      color={order.iconColor}
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="font-psemibold text-[16px]">
                      Order ID {order.id}
                    </Text>
                    <View className="flex-row items-center mt-1">
                      <Text className="font-pmedium text-grey4">
                        {order.itemQty} Items
                      </Text>
                      <View className="mx-2">
                        <Ionicons
                          name="ellipse"
                          color={Colors.grey4}
                          size={8}
                        />
                      </View>
                      <Text className="font-pmedium text-grey4">
                        {order.status}
                      </Text>
                    </View>
                  </View>
                  <Ionicons
                    name={
                      index == 0 ? `chevron-up-outline` : `chevron-down-outline`
                    }
                    size={24}
                    color={Colors.grey4}
                  />
                </View>
                {index == 0 && (
                  <View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Order Confirmed
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Your Order on Delivery by Courier
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Order Delivered
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Order Placed
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-grey1"></View>
            )}
            ListFooterComponent={() => <View className="pb-10"></View>}
          />
        </View>
        <View key="3" className="flex-1 py-4 bg-white">
          <FlatList
            data={orders.filter((order) => order.status == "Completed")}
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={({ item: order, index }) => (
              <View>
                <View className="flex-row items-center justify-between px-6 py-5">
                  <View
                    className={`mr-4 justify-center items-center h-[55px] w-[60px] rounded-xl ${order.iconContainerBg}`}
                  >
                    <Ionicons
                      name={order.icon}
                      size={24}
                      color={order.iconColor}
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="font-psemibold text-[16px]">
                      Order ID {order.id}
                    </Text>
                    <View className="flex-row items-center mt-1">
                      <Text className="font-pmedium text-grey4">
                        {order.itemQty} Items
                      </Text>
                      <View className="mx-2">
                        <Ionicons
                          name="ellipse"
                          color={Colors.grey4}
                          size={8}
                        />
                      </View>
                      <Text className="font-pmedium text-grey4">
                        {order.status}
                      </Text>
                    </View>
                  </View>
                  <Ionicons
                    name={
                      index == 0 ? `chevron-up-outline` : `chevron-down-outline`
                    }
                    size={24}
                    color={Colors.grey4}
                  />
                </View>
                {index == 0 && (
                  <View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Order Confirmed
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Your Order on Delivery by Courier
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Order Delivered
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-start px-6 mt-3 mb-5">
                      <View className="mr-5 pt-1">
                        <Ionicons
                          name="ellipse"
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                      <View className="flex">
                        <Text className="font-psemibold text-[16px]">
                          Order Placed
                        </Text>
                        <Text className="font-pmedium text-grey4">
                          January 19th, 12:02 AM
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-grey1"></View>
            )}
            ListFooterComponent={() => <View className="pb-10"></View>}
          />
        </View>
      </PagerView>
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 20,
  },
  modalView: {
    width: "100%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
