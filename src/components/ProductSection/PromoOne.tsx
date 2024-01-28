import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../components/Themes/Metrixs";
import { PromoOneData } from "./PromoOneData";

const PromoOne = () => {
    const renderItem = ({ item}: any) => {
        return(
            <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <Text>
        {item.title}</Text>
      </View>
        )
    }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lanjut cek ini, yuk</Text>
      <FlatList
      data={PromoOneData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PromoOne;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: verticalScale(10),
    height: verticalScale(200),
    padding: moderateScale(10),
    justifyContent: "center",
  },
  header: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  card: {
    marginVertical: moderateScale(10),
    width: horizontalScale(90),
    height: verticalScale(90),
    marginHorizontal: moderateScale(5),
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(5),
  },
});
