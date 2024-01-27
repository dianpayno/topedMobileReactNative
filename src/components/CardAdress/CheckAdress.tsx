import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale, moderateScale } from '../Themes/Metrixs'
import { MaterialIcons } from '@expo/vector-icons';

const CheckAdress = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00b200" />
        </TouchableOpacity>
        <Text style={styles.text}>Cek Alamat</Text>
        <Text style={styles.text}>Lainya</Text>
     
    </View>
  )
}

export default CheckAdress

const styles = StyleSheet.create({
    container:{
        width:horizontalScale(130),
        height:verticalScale(130),
        marginTop:verticalScale(20),
        borderRadius:moderateScale(10),
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#CCCCCC",
        backgroundColor:"#e5ffe550",
        paddingVertical:moderateScale(15),
    },
    button:{
        marginBottom:verticalScale(10),
        backgroundColor:"white",
        elevation:5,
        padding:moderateScale(5),
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
            },
            android: {
              elevation: 4,
            },
          }),
        borderRadius:moderateScale(100),
    },
    text:{
        fontSize:moderateScale(15),
        fontWeight:"bold",
        color:"#00b200",
        
    }
})