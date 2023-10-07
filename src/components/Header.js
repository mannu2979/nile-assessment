import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import BackButton from './BackButton';

const Header = (props) => {
  const {title, isBack} = props;
    return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {isBack && <BackButton/>}
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        padding:10,
        paddingVertical:12
    },
    title:{
        color:colors.secondary,
        fontSize:18,
        fontWeight:"600",
        textTransform:"uppercase",
        textAlign:'center'
    }
})
export default Header