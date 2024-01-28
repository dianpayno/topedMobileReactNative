import { StyleSheet, Dimensions, Image, View, Text } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "../Themes/Metrixs";
type Props = {
  data?: any;
};

const screenWidth = Dimensions.get("window").width;

const CarouselPromo = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:data.image
        }}
      />
      
    </View>
  );
};

export default CarouselPromo;

const styles = StyleSheet.create({
  container:{
    width: screenWidth,
    height: verticalScale(130),
  },
  image:{
    width:"100%", 
    height:"100%",
  },
  
})


