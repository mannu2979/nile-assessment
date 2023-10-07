import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../constants/colors'
import { deleteProduct, getProduct } from '../apis'
import BackButton from '../components/BackButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import Buttons from '../components/Buttons'
import { useNavigation } from '@react-navigation/native'
const { height, width } = Dimensions.get('window')
const ProductDetails = (props) => {
    const navigation = useNavigation()
    const [product, setProduct] = useState({})
    const { id } = props.route.params
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await getProduct(id).then(res => {
            setProduct(res)
            console.log(res)
        }).catch(res => console.error(res))
    }
    const deleteItem = async() =>{
        await deleteProduct(product.id).then(res=> {
            if(res.isDeleted){
                alert("Succesfully Deleted")
                navigation.goBack()
            }
        }).catch(error=> console.log(error))
    }
    const editProduct = async() =>{
        navigation.navigate("EditProduct",{item:product})
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <ImageBackground source={{ uri: product.thumbnail }} style={styles.image} >
                    <BackButton />
                </ImageBackground>
                <View style={styles.horizontalContainer}>
                    <View style={styles.subContainer}>
                        <Text style={styles.title}>{product.brand} {product.title}</Text>
                        <Text style={styles.category}>({product.category})</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.category}>Rating : {product.rating}</Text>
                        <Text style={styles.category}>InStock : {product.stock}</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.category}>Price : {product.price + product.price} ({product.discountPercentage}% off)</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.category}>Details : </Text>
                    <Text style={styles.category}>{product.description}</Text>
                </View>
                {/* {product.images.map(({item,index}) =>(
                        <Image key={index} source={{uri: item}} style={styles.images}/>
                    ))} */}
                    <View>
                        <Buttons title="edit" onPress={editProduct}/>
                        <Buttons title="delete" onPress={deleteItem}/>
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    image: {
        height: width,
        width: "100%",
        justifyContent: 'space-between'
    },
    images:{
        width:300,
        height: 300
    },
    subContainer: {
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    title: {
        fontSize: 22,
        color: colors.font
    },
    category: {
        fontSize: 16,
        color: colors.font
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})