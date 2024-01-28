import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {useState} from "react";
import { verticalScale } from "../../components/Themes/Metrixs";
import { BootomIcon } from "./BottomIcon";


const BottomNavigation = () => {
  const [active, setActive] = useState(0);
  const renderItem = (item: any, index:number) => {
    const indexActive = index === active 
    return (
      <TouchableOpacity 
      key={index}
      onPress={() => setActive(index)} style={styles.wraper}>
        {
          indexActive?
          <Image style={styles.image} source={{uri: item.filled}} />:
        <Image style={styles.image} 
        source={{ uri: item.image }} 
        />
        }
        <Text style={[styles.text,
        {
          color: indexActive ? "#1c750b" : "black",
        }
        
        ]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.bottomNavigation}>
      {BootomIcon.map((item, index) => renderItem(item, index))}
      {/* <TouchableOpacity style={styles.wraper}>
        <Image style={styles.image} source={require("../../../assets/filled/home-svgrepo-com.png")} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FAF9F6",
    flexDirection: "row",
    height: verticalScale(80),
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: verticalScale(15),
    paddingHorizontal: verticalScale(26),
  },
  wraper: {
    flexDirection: "column",
    alignItems: "center",
    gap: verticalScale(1),
  },
  text: {
    fontSize: verticalScale(10),
  },
  image: {
    width: verticalScale(23),
    height: verticalScale(23),
  },
});
