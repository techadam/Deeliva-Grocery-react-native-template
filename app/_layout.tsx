import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Italic": require("../assets/fonts/Roboto-Italic.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto-BoldItalic.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const navigation = useNavigation();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="categories"
          options={{
            headerShown: true,
            headerTitle: "Categories",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="pr-4"
              >
                <Ionicons name="arrow-back-outline" size={28} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="ellipsis-vertical-outline" size={28} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="products" />
        <Stack.Screen name="details" />
        <Stack.Screen
          name="checkout"
          options={{
            headerTitle: "Checkout",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
            },
          }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: "modal",
            animation: "slide_from_bottom",
            headerTitle: "Filters",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="mr-6"
              >
                <Ionicons name="close" size={25} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Text className="text-orange-500 font-bold">Clear</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>

      <StatusBar style="light" />
    </>
  );
}
