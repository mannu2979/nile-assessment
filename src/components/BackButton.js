import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BackButton = () => {
    const navigation = useNavigation()
    const goBack = () =>{
        navigation.goBack()
    }
  return (
    <TouchableOpacity style={styles.button} onPress={goBack}>
      <Image source={require('../assets/back.png')} style={styles.image}/>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:'rgba(255,255,255,0.8)',
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        margin:16
    },
    image:{
        height:30,
        width:20
    }
})