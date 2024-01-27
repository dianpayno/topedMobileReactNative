import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "../Themes/Metrixs";
type Props = {
  data?: any;
};
const CarouselPromo = ({ data }: Props) => {
  console.log(data);
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/waystodoapps.appspot.com/o/dua.jpg?alt=media&token=a687bc7c-34a7-4344-a477-302a2f421d03",
        }}
      />
    </>
  );
};

export default CarouselPromo;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: verticalScale(125),
    resizeMode: "contain",
  },
});
