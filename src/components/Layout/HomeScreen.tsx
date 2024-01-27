import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../components/Themes/Metrixs";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CardAddres from "../CardAdress/Index";

const HomeScreenlayout = () => {
  const alamat =
    "Jl. Green Andara Residences Blok B3 No. 19, Pangkalan Jati Baru, Cinere, Depok, Jawa Barat , Indonesia";
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containeradress}>
        <Ionicons name="location-sharp" size={15} color="#00b200" />
        <View style={{ flexDirection: "row", gap: horizontalScale(5) }}>
          <Text style={{ color: "grey" }}>Dikirim ke</Text>
          <Text>{alamat.substring(0, 45) + "..."}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={15} color="black" />
        </View>
      </View>
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Ionicons name="close-outline" size={30} color="black" />
          <Text style={styles.title}>Mau dikirim belanjaan kemana?</Text>
        </View>
        <Text style={{paddingHorizontal:moderateScale(15)}}>Biar pengalaman belanjamu lebih baik, pilih alamat dulu.</Text>
        <View style={{paddingHorizontal:moderateScale(15)}}>
          <CardAddres />
        </View>
        <View style={styles.footer}>
          <Text>Mau pakai cara lain?</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreenlayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: moderateScale(5),
  },
  containeradress: {
    flexDirection: "row",
    gap: horizontalScale(5),
    
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: verticalScale(400),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    backgroundColor: "#F8F7F3",
    paddingVertical: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: "600",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: horizontalScale(7),
    alignItems: "center",
    marginBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(15),
  },
  footer:{
    justifyContent: "space-between",
    marginTop: verticalScale(30),
    borderTopWidth: 2,
    backgroundColor: "white",
    borderColor: "gray",
  }
});
