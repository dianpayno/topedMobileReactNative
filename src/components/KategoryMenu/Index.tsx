import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../components/Themes/Metrixs";
import { Kategory } from "../Mocks/Kategory";

const KategoryMenu = () => {
  const firstRender = Kategory.slice(0, 7);
  const secondRender = Kategory.slice(7, 14);
  const renderItem = ({ item, index }: any) => {
    return (
      <>
        <View style={styles.Wraper}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </>
    );
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          {firstRender.map((item, index) => {
            return <View key={index}>{renderItem({ item, index })}</View>;
            return renderItem({ item, index });
          })}
        </View>
        <View>
          <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
            {secondRender.map((item, index) => {
              return <View key={index}>{renderItem({ item, index })}</View>;
            })}
          </View>
        </View>
      </View>
    </ScrollView>

  );
};

export default KategoryMenu;

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(43),
    height: verticalScale(43),
    borderRadius: moderateScale(10),
    resizeMode: "contain",
  },
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  Wraper: {
    flexDirection: "column",
    width: horizontalScale(60),
    alignItems: "center",
  },
  text: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(3),
    textTransform: "capitalize",
    width: Platform.OS === "ios" ? horizontalScale(50) : horizontalScale(60),
    textAlign: "center",
  },
});
