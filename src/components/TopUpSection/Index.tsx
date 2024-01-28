import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "../Themes/Metrixs";


const TopUpSection = () => {
   const saldo = 370800;
  
  return (
    <View style={styles.container}>
      <View style={styles.containerWraper}>
        <Image
          style={styles.image}
          source={require("../../../assets/action/gopaylogo.png")}
        />
        <View>
          <Text style={styles.text}>
            {
              Platform.OS === "ios" ?saldo?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              })  : "Rp370.670"
            }
          </Text>
          <Text style={{color:"gray", fontSize:13}}>3.456 Coins</Text>
        </View>
      </View>

      <View style={styles.containerWraperMiddle}>
        <Image
          style={styles.image}
          source={require("../../../assets/action/pluslogo.png")}
        />
        <View>
          <Text style={styles.text}>
            Coba 1 Bulan
          </Text>
          <Text style={{color:"#00b200", fontWeight:"bold", fontSize:13}}>Langganan, Yuk!</Text>
        </View>
      </View>

      <View style={styles.containerWraper}>
        <Image
          style={styles.image}
          source={require("../../../assets/action/silver.png")}
        />
        <View>
          <Text style={styles.text}>
           Silver
          </Text>
          <Text style={{color:"gray", fontSize:13}}>9 Kupon Baru</Text>
        </View>
      </View>
     
    </View>
  );
};

export default TopUpSection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: verticalScale(50),
    paddingVertical: moderateScale(8),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerWraper: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  containerWraperMiddle: {
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:"#CCCCCC80",
    paddingHorizontal:moderateScale(7),
    flexDirection: "row",
    alignItems: "center",
    gap: Platform.OS === "ios" ? moderateScale(5): moderateScale(1),
  },
  image: {
    width: moderateScale(23),
    height: moderateScale(23),
    resizeMode: "contain",
  },
  text:{
    fontSize: moderateScale(15),
    fontWeight: "bold",
  }
});
