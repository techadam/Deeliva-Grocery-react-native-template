import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const TabIcon = ({ icon, color, name, focused, type }: any) => {
  return (
    <View className="items-center justify-center gap-2 pt-2">
      {type == "ant" ? (
        <AntDesign name={icon} size={26} color={color} />
      ) : (
        <Ionicons name={icon} size={26} color={color} />
      )}
      <Text
        className={`-top-2 relative text-[13px] font-rbmedium ${
          focused ? "text-primary " : " text-grey4"
        }`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.grey4,
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#efefef",
            height: 57,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? "home" : "home-outline"}
                name="Home"
                focused={focused}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="shop"
          options={{
            title: "Shop",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? "storefront" : "storefront-outline"}
                name="Shop"
                focused={focused}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center justify-center h-[52px] w-[52px] bg-primary rounded-full mb-8">
                <View className="pt-4">
                  <Ionicons name="cart" size={26} color="#fff" />
                  <Text
                    className={`-top-2 relative text-[13px] font-rbmedium ${
                      focused ? "text-primary " : " text-grey4"
                    }`}
                  ></Text>
                </View>
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
              router.push("/cart"); // <-- Here you put the name where the chat component is declared
            },
          })}
        />

        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? "heart" : "heart-outline"}
                name="Favorite"
                focused={focused}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            headerTitle: "My Profile",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
            },
            headerLeft: () => (
              <View
                className="ml-3 pb-2"
              >
                <Ionicons name="person-outline" size={25} />
              </View>
            ),
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="people-circle-outline"
                name="Profile"
                focused={focused}
                color={color}
              />
            ),
          }}
        />
      </Tabs>

      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
