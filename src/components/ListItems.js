import { Image, StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window')
const ListItems = (props) => {
    const { title, thumbnail, price, discountPercentage, stock, description, category, id } = props.item;
    const navigation = useNavigation()
    const gotoDetails = (item) =>{
        navigation.navigate("ProductDetails",{id : item.id})
    }
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={() => gotoDetails(props.item)}>
            <ImageBackground source={{ uri: thumbnail }} style={styles.image} >
                <View style={styles.chip}>
                    <Text style={styles.chipText}>{discountPercentage}% off</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.chipText}>Stock({stock})</Text>
                    <Text style={styles.chipText}>INR:{price} ₹</Text>
                </View>
            </ImageBackground>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.chipText}>({category})</Text>
        </TouchableOpacity>
    )
}

export default ListItems

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.tertiary,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
        height: width / 2,
        width: "100%",
        justifyContent:'space-between'
    },
    title: {
        fontSize: 16,
        marginTop: 5
    },
    chip: {
        backgroundColor: colors.tertiary,
        alignSelf: 'flex-end',
        margin: 10,
        padding: 10,
        paddingVertical: 0,
        borderRadius: 40,
        elevation: 5
    },
    chipText: {
        fontSize: 12,
        marginVertical: 5,
        fontWeight: "700",
        color:colors.primary
    },
    priceContainer:{
        backgroundColor: 'rgba(255,255,255,0.5)',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingHorizontal:16
    }
})