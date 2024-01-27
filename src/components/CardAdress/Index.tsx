import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale, moderateScale } from '../Themes/Metrixs'

const CardAddres = () => {
    const alamat =
    "Jl. Green Andara Residences Blok B3 No. 19, Pangkalan Jati Baru, Cinere, Depok, Jawa Barat , Indonesia";
  return (
    <View style={styles.container}>
        <View style={styles.containerlabel}>
      <Text style={{fontWeight:"bold", fontSize:moderateScale(17)}}>Rumah</Text>
      <View style={styles.label}>
        <Text style={{fontWeight:"bold", fontSize:moderateScale(13)}}>Utama</Text>
      </View>
        </View>
      <Text style={{fontWeight:"bold", fontSize:moderateScale(19), paddingHorizontal:moderateScale(15)}}>Dian Herdiana</Text>
      <Text style={{ fontSize:moderateScale(13),  paddingHorizontal:moderateScale(15)}}>082113855446</Text>
      <Text style={{ fontSize:moderateScale(13),  paddingHorizontal:moderateScale(15)}}>{alamat.substring(0, 25) + "..."}</Text>
      <Text style={{ fontSize:moderateScale(13),  paddingHorizontal:moderateScale(15)}}>Jakarta Selatan</Text>
    </View>
  )
}

export default CardAddres

const styles = StyleSheet.create({
    container:{
        width:horizontalScale(170),
        height:verticalScale(130),
        marginTop:verticalScale(20),
        borderRadius:moderateScale(10),
        borderWidth:1,
        justifyContent:"center",
        borderColor:"#00b200",
        backgroundColor:"#e5ffe550",
        paddingVertical:moderateScale(15),
    },
    label:{
        paddingHorizontal:moderateScale(5),
        backgroundColor:"#E5E4E2",
        borderRadius:moderateScale(5),
        alignItems:"center",
        justifyContent:"center"
    },
    containerlabel:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderLeftWidth:3,
        borderColor:"#00b200",
        paddingHorizontal:moderateScale(15),
         

    }
})