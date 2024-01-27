import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../components/Themes/Metrixs";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import CardAddres from "../CardAdress/Index";
import CheckAdress from "../CardAdress/CheckAdress";
import TopUpSection from "../TopUpSection/Index";
import CarouselPromo from "../Carousel/CarouselPromo";
import { Addres } from "../Mocks/Addres";
import { ImagesSlide } from "../Mocks/CarouselImage";

const HomeScreenlayout = () => {
  const [detailAndress, setDetailAndress] = useState(false);
  const alamat =
    "Jl. Green Andara Residences Blok B3 No. 19, Pangkalan Jati Baru, Cinere, Depok, Jawa Barat , Indonesia";
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containeradress}>
        <Ionicons name="location-sharp" size={15} color="#00b200" />
        <View style={{ flexDirection: "row", gap: horizontalScale(5) }}>
          <Text style={{ color: "grey" }}>Dikirim ke</Text>
          <Text
          >
            {Platform.OS === "ios"
              ? alamat.substring(0, 45) + "..."
              : alamat.substring(0, 36) + "..."}
          </Text>
          <TouchableOpacity onPress={() => setDetailAndress(true)}>
            <MaterialIcons name="keyboard-arrow-down" size={15} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {detailAndress && (
        <View style={styles.modalContainer}>
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => setDetailAndress(false)}>
              <Ionicons name="close-outline" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Mau dikirim belanjaan kemana?</Text>
          </View>
          <Text style={{ paddingHorizontal: moderateScale(15) }}>
            Biar pengalaman belanjamu lebih baik, pilih alamat dulu.
          </Text>
          <View
            style={{
              paddingHorizontal: moderateScale(15),
              flexDirection: "row",
            }}
          >
            <FlatList
              data={Addres}
              renderItem={({ item, index }) => (
                <>
                <CardAddres data={item} index={index} />
                {
                  index === Addres.length -1 ? <CheckAdress /> : null
                }
                </>
              )}
              keyExtractor={(item) => item.id.toString()}
              //   karena keyExtractor butuh string as areturn not number
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            {/* <CheckAdress /> */}
          </View>
          <View style={styles.footer}>
            <Text style={styles.titlefooter}>Mau pakai cara lain?</Text>

            <View style={styles.containertextWrap}>
              <View style={styles.textWrap}>
                <SimpleLineIcons name="location-pin" size={24} color="black" />
                <Text
                  style={{ fontSize: moderateScale(17), fontWeight: "500" }}
                >
                  Pilih Kota atau Kecamatan
                </Text>
              </View>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="black"
              />
            </View>
          </View>
        </View>
      )}
      <View>
        <TopUpSection/>
      </View>
      <View style={{ marginTop: verticalScale(12),
    // position: "absolute",
    // top:verticalScale(60),
    // left:0,
    // right:0,
    }}>
       
        <FlatList
        data={ImagesSlide}
        keyExtractor={(item) => item.id.toString()}
    
        renderItem={({ item }) => (
            <CarouselPromo data={item}/>
        )}
        />
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
  footer: {
    justifyContent: "space-between",
    marginTop: verticalScale(30),
    borderTopWidth: 2,
    padding: verticalScale(15),
    borderColor: "#E5E4E2",
  },
  titlefooter: {
    fontSize: moderateScale(20),
    fontWeight: "600",
  },
  textWrap: {
    flexDirection: "row",
    gap: horizontalScale(5),

    alignItems: "center",
  },
  containertextWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(20),
    justifyContent: "space-between",
  },
});
