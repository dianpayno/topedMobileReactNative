import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../Themes/Metrixs";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

const HeaderMain = () => {
    return (
      <View style={styles.container}>
        <View style={styles.containerMenu}>
        <View style={styles.inputcontainer}>
          <Ionicons name="search" size={20} color="#808080" />
          <TextInput style={styles.textinput} />
        </View>
        <View style={styles.containerTab}>
          <View style={styles.containerTabicon}>
          <Feather name="mail" size={25} color="#0c0c0c" />
          <View style={styles.badge}>
            <Text style={styles.badgetext}>0</Text>
          </View>

          </View>

        <Ionicons name="notifications-outline" size={27} color="#0c0c0c"/>
        <Feather name="shopping-cart" size={25} color="black" />
        <Feather name="menu" size={23} color="black" />

        </View>

        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      height: horizontalScale(50),
      alignItems: "flex-start",
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(10),
      justifyContent: "flex-end",
    },
    textinput: {
      width: horizontalScale(180),
      height: verticalScale(30),
      padding: moderateScale(7),
      fontSize: moderateScale(17),
    },
    containerMenu:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: horizontalScale(15)
    },
    containerTab:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: horizontalScale(10)
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
    containerTabicon:{
      position: "relative",
    },
    badge:{
      position: "absolute",
      top:verticalScale(-10),
      right: horizontalScale(-10),
      backgroundColor: "#ff3232",
      borderRadius:moderateScale(10),
      width:horizontalScale(20),
      height:verticalScale(20),
      alignItems: "center",
      justifyContent: "center",
    },
    badgetext:{
      color: "white",
      fontSize: moderateScale(15),
      fontWeight: "bold",
    }
  });


  export default HeaderMain