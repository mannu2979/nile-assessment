import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddButton = () => {
    const navigation = useNavigation()
    const addProduct = () =>{
        navigation.navigate("AddProduct")
    }
  return (
    <TouchableOpacity style={styles.button} onPress={addProduct}>
      <Image source={require('../assets/add.png')} style={styles.image}/>
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:'rgba(255,255,255,1)',
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