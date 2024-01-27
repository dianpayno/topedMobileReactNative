import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Themes/Metrixs";

type Props = {
  data: any;
  index?: number;
};
const CardAddres = ({ data, index }: Props) => {
  const [active, setActive] = useState(0);

  return (
    <TouchableOpacity
    
      style={[
        {
          marginRight: moderateScale(15),
          borderColor: active === index ? "#00b200" : "#CCCCCC",
        },
        styles.container,
      ]}
    >
      <View style={styles.containerlabel}>
        <Text style={{ fontWeight: "bold", fontSize: moderateScale(17) }}>
          {data.title}
        </Text>

        {data.utama ? (
          <View style={styles.label}>
            <Text style={{ fontWeight: "bold", fontSize: moderateScale(13) }}>
              Utama
            </Text>
          </View>
        ) : null}
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: moderateScale(19),
          paddingHorizontal: moderateScale(15),
        }}
      >
        {data.name}
      </Text>
      <Text
        style={{
          fontSize: moderateScale(13),
          paddingHorizontal: moderateScale(15),
        }}
      >
        {data.phone}
      </Text>
      <Text
        style={{
          fontSize: moderateScale(13),
          paddingHorizontal: moderateScale(15),
        }}
      >
        {data.address.substring(0, 25) + "..."}
      </Text>
      <Text
        style={{
          fontSize: moderateScale(13),
          paddingHorizontal: moderateScale(15),
        }}
      >
        {data.provinsi}
      </Text>
    </TouchableOpacity>
  );
};

export default CardAddres;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(170),
    height: verticalScale(130),
    marginTop: verticalScale(20),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "#e5ffe550",
    paddingVertical: moderateScale(15),
  },
  label: {
    paddingHorizontal: moderateScale(5),
    backgroundColor: "#E5E4E2",
    borderRadius: moderateScale(5),
    alignItems: "center",
    justifyContent: "center",
  },
  containerlabel: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderLeftWidth: 3,
    borderColor: "#00b200",
    paddingHorizontal: moderateScale(15),
  },
});
