import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import StarRating from "react-native-star-rating-widget";
import CustomButton from "@/components/CustomButton";

const Details = () => {
  const translationY = useSharedValue(0);
  const HEADER_HEIGHT = 320;
  const navigation = useNavigation();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerBackground: () => (
        <Animated.View style={[styles.pageHeader, headerAnimatedStyle]} />
      ),
      headerLeft: () => (
        <TouchableOpacity
          className=" h-[38px] w-[38px] rounded-full bg-white items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View className="flex-row items-center">
          <TouchableOpacity
            className="h-[38px] w-[38px] rounded-full bg-white items-center justify-center"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="heart-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    const yOffset = event.contentOffset.y;
    if (translationY.value >= 215) return;
    translationY.value = yOffset;
  });

  const parallaxAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [0, HEADER_HEIGHT / 1.2],
        [0, 1]
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: "transparent" },
            parallaxAnimatedStyle,
          ]}
        >
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2022/10/06/14/02/lemon-juice-7502776_960_720.jpg",
            }}
            className="h-[320px] w-full"
            resizeMode="cover"
          />
        </Animated.View>
        <View style={styles.content}>
          <Text className="text-[18px] font-psemibold uppercase text-secondary-dark ">
            Fruits
          </Text>
          <Text className="text-[21px] font-pmedium">Organic Lemons</Text>
          <Text className=" font-bold leading-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            commodo vulputate lacus, nec euismod{" "}
          </Text>

          <View className="flex-row items-center my-4">
            <View className="flex-row gap-x-1 items-center">
              <StarRating
                rating={1}
                maxStars={1}
                color="#fea903"
                starSize={24}
                onChange={() => {}}
              />
              <Text>4.6 (89 reviews)</Text>
            </View>
            <View className="mx-3 w-[1px] h-[20px] bg-grey3"></View>
            <View className="flex-row gap-x-1 items-center">
              <Ionicons name="car-sport" size={22} color={Colors.primary} />
              <Text className="pl-2 text-primary font-psemibold uppercase">
                Free Delivery
              </Text>
            </View>
          </View>

          <View className="flex-row items-end justify-between">
            <View>
              <Text className="text-grey4 font-rbmedium text-[15px] mb-3">
                Price
              </Text>
              <View className="gap-3 flex-row items-end">
                <Text className="font-psemibold text-2xl">$10.99</Text>
                <Text className="text-grey3 font-pregular text-md line-through">
                  $15.99
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between items-center">
              <TouchableOpacity className="px-3 py-3 bg-white border border-grey1 rounded-xl">
                <Ionicons name="remove" color="#000" size={16} />
              </TouchableOpacity>

              <Text className="w-10 text-center text-lg font-pmedium">{2}</Text>

              <TouchableOpacity className="px-3 py-3 bg-primary-light border border-primary-light rounded-xl">
                <Ionicons name="add" color={Colors.primary} size={16} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="border border-dashed border-[#cfd8dc] my-5"></View>

          <View className="flex-row mb-10">
            <Text className="text-[15px] uppercase p-1 px-4 rounded-xl bg-yellow-600 text-white font-pregular">
              20% off discount
            </Text>
          </View>

          <CustomButton
            label="Add to Cart"
            extraBtnClass="bg-primary shadow-xl shadow-primary pt-1"
            extraTxtClass="text-white"
            icon="cart"
            iconColor="#fff"
          />
        </View>
      </Animated.ScrollView>

      <StatusBar translucent={true} style="light" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 320,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 28,
    overflow: "hidden",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    top: -20,
    backgroundColor: "#fff",
  },
  pageHeader: {
    backgroundColor: "#fff",
    height: 100,
  },
});
