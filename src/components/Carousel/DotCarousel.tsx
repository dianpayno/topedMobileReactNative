import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  horizontalScale,
  verticalScale,
} from "../../components/Themes/Metrixs";
import { ImagesSlide } from "../Mocks/CarouselImage";


type DotProps = {
    activeIndex: number;
}
const DotCarousel = ({activeIndex}: DotProps) => {
  return (
    <View style={styles.container}>
      {ImagesSlide.map((_, index) => {
        const active = index === activeIndex;
        return <View key={index} style={[styles.dot,
       active ? { 
        backgroundColor: "#ffffff",
        width: horizontalScale(50), 
    } : null,
         
        
        ]}> 
        </View>;
      })}
    </View>
  );
};

export default DotCarousel;

const styles = StyleSheet.create({
  dot: {
   
    height: verticalScale(7),
    width: horizontalScale(7),
    borderRadius: horizontalScale(100),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
   
  },
  container:{
    flexDirection:"row",
    gap:horizontalScale(5),
    position: "absolute",
    bottom:verticalScale(8),
  }
});
