import CustomInput from "@/components/CustomInput";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  BackHandler,
  Image,
  Modal,
} from "react-native";
import PagerView from "react-native-pager-view";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CustomButton from "@/components/CustomButton";
import CardImg from "@/assets/images/card.jpg";
import MasterCardSvg from "@/assets/images/mastercard.png";

const Checkout = () => {
  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const viewPager = useRef<any>(null);
  const navigation = useNavigation();
  const pagerTitles = ["Shipping", "Payment", "Review"];

  useEffect(() => {
    const backAction = () => {
      if (page > 0) {
        setPage(page - 1);
      } else {
        navigation.goBack();
      }

      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    viewPager.current?.setPage(page);
  }, [page]);

  return (
    <>
      <View className="px-6 py-5 flex-row justify-between items-center gap-3 bg-[#f5f5f5]">
        {pagerTitles.map((title, index) => (
          <View className="flex-row justify-between items-center" key={index}>
            <View
              className={`w-[20px] h-[20px] rounded-full justify-between items-center mr-2 ${
                page == index
                  ? "bg-dark"
                  : page > index
                  ? "bg-primary"
                  : "bg-grey4"
              }`}
            >
              {page <= index && (
                <Text className={`font-psemibold text-xs text-white pt-[2px]`}>
                  {index + 1}
                </Text>
              )}
              {page > index && (
                <View className="pt-1">
                  <Ionicons name="checkmark" color="#fff" />
                </View>
              )}
            </View>
            <Text className="font-pmedium  pt-[2px]">{title}</Text>
          </View>
        ))}
      </View>
      <PagerView
        useNext={true}
        scrollEnabled={false}
        style={styles.pagerView}
        ref={viewPager}
        initialPage={page}
        onPageSelected={(e) => {
          setPage(e.nativeEvent.position);
        }}
      >
        <ScrollView key="1" className="flex-1 px-6 py-4 ">
          <View className="flex-1 bg-white pb-32">
            <CustomInput
              label="Full Name"
              placeholder="Louisanderson"
              handleTextChange={(e: any) => {}}
            />

            <CustomInput
              label="Email Address"
              placeholder="Louisanderson"
              handleTextChange={(e: any) => {}}
            />

            <CustomInput
              label="Phone"
              placeholder="Enter phone number"
              handleTextChange={(e: any) => {}}
            />

            <CustomInput
              label="Address"
              placeholder="type your home address"
              handleTextChange={(e: any) => {}}
            />

            <View className="flex-row" style={{ gap: 12 }}>
              <View className="flex-1">
                <CustomInput label="Zip Code" placeholder="Enter here" />
              </View>
              <View className="flex-1">
                <CustomInput label="Country" placeholder="Enter here" />
              </View>
            </View>

            <CustomInput
              label="Country"
              placeholder="Choose your country"
              iconRight="caret-down"
              handleTextChange={(e: any) => {}}
            />

            <View className="space-x-2">
              <BouncyCheckbox
                size={20}
                fillColor={Colors.primary}
                unFillColor="#FFFFFF"
                textComponent={
                  <Text className="font-rbmedium text-[15px] ml-2">
                    Save shipping address
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
          </View>
        </ScrollView>
        <ScrollView key="2" className="flex-1 px-6 py-4 ">
          <View className="flex-1 bg-white pb-32">
            <View className="mb-5 flex-row justify-between gap-2 items-center">
              <TouchableOpacity className="items-center justify-center p-4 border border-grey1 rounded-xl w-[30%]">
                <Ionicons name="cash" size={28} color={Colors.grey4} />
                <Text className="text-center pt-1 font-pregular">Cash On</Text>
                <Text className="text-center font-pregular -top-1">
                  Delivery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="items-center justify-center p-4 border border-primary rounded-xl w-[30%]">
                <Ionicons name="card" size={28} color={Colors.primary} />
                <Text className="text-center pt-1 font-pregular">Credit</Text>
                <Text className="text-center font-pregular -top-1">Card</Text>
              </TouchableOpacity>

              <TouchableOpacity className="items-center justify-center p-4 border border-grey1 rounded-xl w-[30%]">
                <Ionicons name="logo-paypal" size={28} color={Colors.grey4} />
                <Text className="text-center pt-1 font-pregular">Paypal</Text>
                <Text className="text-center font-pregular -top-1">Method</Text>
              </TouchableOpacity>
            </View>

            <View className="rounded-xl overflow-hidden mb-5">
              <Image
                className="w-full h-[195px]"
                source={CardImg}
                resizeMode="contain"
              />
            </View>

            <CustomInput
              label="Card Holder Name"
              placeholder="Louis Anderson"
              handleTextChange={(e: any) => {}}
            />

            <CustomInput
              label="Card Number"
              placeholder="5399 0981 1123 3322"
              handleTextChange={(e: any) => {}}
            />

            <View className="flex-row" style={{ gap: 12 }}>
              <View className="flex-1">
                <CustomInput label="Month / Year" placeholder="Enter here" />
              </View>
              <View className="flex-1">
                <CustomInput label="CVV" placeholder="Enter here" />
              </View>
            </View>

            <View className="space-x-2">
              <BouncyCheckbox
                size={20}
                fillColor={Colors.primary}
                unFillColor="#FFFFFF"
                textComponent={
                  <Text className="font-rbmedium text-[15px] ml-2">
                    Save this card
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
          </View>
        </ScrollView>
        <ScrollView key="3" className="flex-1 px-6 py-4 ">
          <View className="flex-1 bg-white pb-32">
            <View className=" border border-grey1 rounded-xl p-4 py-3 mb-6">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-[18px] font-psemibold">Payment</Text>

                <TouchableOpacity onPress={() => setPage(1)}>
                  <Text className="text-primary font-rbmedium text-[15px]">
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <Image
                    source={MasterCardSvg}
                    resizeMode="contain"
                    className="w-[32px] h-[32px] mr-2"
                  />
                  <Text className="text-grey4 text-[15px]">
                    **** ****{" "}
                    <Text className="text-dark font-psemibold">6784</Text>
                  </Text>
                </View>

                <Text className="text-[16px]">01/24</Text>
              </View>
            </View>

            <View className=" border border-grey1 rounded-xl p-4 py-3 mb-6">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-[18px] font-psemibold">Shipping</Text>

                <TouchableOpacity onPress={() => setPage(0)}>
                  <Text className="text-primary font-rbmedium text-[15px]">
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-[14px]">Name</Text>

                <Text className="text-[14px] font-bold">Louis Anderson</Text>
              </View>
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-[14px]">Street</Text>

                <Text className="text-[14px] font-bold">
                  1313 Wolf pen Road
                </Text>
              </View>
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-[14px]">State</Text>

                <Text className="text-[14px] font-bold">Pensylvania</Text>
              </View>
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-[14px]">Country</Text>

                <Text className="text-[14px] font-bold">United States</Text>
              </View>
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-[14px]">Email</Text>

                <Text className="text-[14px] font-bold">
                  louisanderson@gmail.com
                </Text>
              </View>
            </View>

            <View className="">
              <View className="pb-8 border-t border-[#cfd8dc] border-dashed pt-6">
                <Text className="font-pmedium text-2xl text-center">
                  5 Items
                </Text>
                <View className="flex-row items-center justify-between my-2 gap-2">
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
                  <Text className="font-psemibold text-[20px]">Total</Text>
                  <Text className="font-psemibold text-[20px]">$53.68</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </PagerView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View className="absolute left-0 right-0 -top-8 items-center w-[100%]">
              <View className="bg-primary h-[65px] w-[65px] rounded-full items-center justify-center">
                <Ionicons name="checkmark" color="#fff" size={40} />
              </View>
            </View>

            <View className="p-[20px] mt-6">
              <Text className="text-center font-psemibold text-[22px]">
                Payment successful
              </Text>

              <View className=" border border-grey1 rounded-xl mt-3 p-4 py-3 mb-6">
                <View className="flex-row justify-between items-center mb-3">
                  <Text className="text-[14px]">Transaction Number</Text>

                  <Text className="text-[14px] font-bold">445571701</Text>
                </View>
                <View className="flex-row justify-between items-center mb-3">
                  <Text className="text-[14px]">Order ID</Text>

                  <Text className="text-[14px] font-bold">#ORD-001</Text>
                </View>
                <View className="flex-row justify-between items-center mb-3">
                  <Text className="text-[14px]">Amount</Text>

                  <Text className="text-[14px] font-bold">$58.68</Text>
                </View>
                <View className="flex-row justify-between items-center mb-3">
                  <Text className="text-[14px]">Phone</Text>

                  <Text className="text-[14px] font-bold">429-901-7063</Text>
                </View>
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-[14px]">Email</Text>

                  <Text className="text-[14px] font-bold">
                    louisanderson@gmail.com
                  </Text>
                </View>
              </View>

              <CustomButton
                extraBtnClass="bg-primary"
                extraTxtClass="text-white"
                label="Back to Shopping"
                handlePress={() => router.replace('/home')}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View className="absolute bottom-0 right-0 left-0 px-6 bg-white py-2">
        <CustomButton
          extraBtnClass="bg-primary shadow-xl shadow-primary"
          extraTxtClass="text-white"
          label={page == 2 ? "Submit Order" : "Continue"}
          handlePress={() => {
            if (page < 2) {
              setPage(page + 1);
            } else {
              setShowModal(true);
            }
          }}
        />
      </View>
    </>
  );
};

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

export default Checkout;
