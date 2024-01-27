import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../components/Themes/Metrixs";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// import screen
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const headerIcon = [
    {
      icon: <Feather name="mail" size={23} color="#0c0c0c" />,
      badge: 2,
      name: "message",
    },
    {
      icon: <Ionicons name="notifications-outline" size={23} color="#0c0c0c" />,
      badge: 10,
      name: "notification",
    },
    {
      icon: <Feather name="shopping-cart" size={23} color="black" />,
      badge: 2,
      name: "cart",
    },
  ];
  const HeaderMain = () => {
    return (
      <View style={styles.container}>
        <View style={styles.containerMenu}>
          <View style={styles.inputcontainer}>
            <Ionicons name="search" size={20} color="#808080" />
            <TextInput
              placeholder="Cari Di Tokopedia"
              style={styles.textinput}
            />
          </View>
          <View style={styles.containerTab}>
            {headerIcon.map((item: any, index: number) => (
              <View key={index} style={styles.containerTabicon}>
                {item.icon}
                <View style={styles.badge}>
                  <Text style={styles.badgetext}>{item.badge}</Text>
                </View>
              </View>
            ))}

            <Feather name="menu" size={20} color="black" />
          </View>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      height: horizontalScale(90),
      alignItems: "flex-start",
      backgroundColor: "white",
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(10),
      justifyContent: "flex-end",
    },
    textinput: {
      width: horizontalScale(180),
      height: verticalScale(30),
      padding: Platform.OS === "ios" ? moderateScale(7) : moderateScale(5),
      fontSize: Platform.OS === "ios" ? moderateScale(17) : moderateScale(15),
    },
    containerMenu: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: horizontalScale(15),
    },
    containerTab: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: horizontalScale(10),
    },
    inputcontainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: horizontalScale(200),
      height: verticalScale(32),
      borderRadius: moderateScale(10),
      borderWidth: 1,
      borderColor: "#CCCCCC",
      paddingLeft: horizontalScale(10),
    },
    containerTabicon: {
      position: "relative",
    },
    badge: {
      position: "absolute",
      top: verticalScale(-9),
      right: horizontalScale(-7),
      backgroundColor: "#ff3232",
      borderRadius: moderateScale(10),
      width: horizontalScale(17),
      height: verticalScale(17),
      alignItems: "center",
      justifyContent: "center",
    },
    badgetext: {
      color: "white",
      fontSize: moderateScale(12),
      fontWeight: "bold",
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: HeaderMain,
            headerShown: true,
          }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
