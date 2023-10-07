import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getProducts } from '../apis'
import Header from '../components/Header'
import { colors } from '../constants/colors'
import ListItems from '../components/ListItems'
import AddButton from '../components/AddButton'

const Products = () => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        StatusBar.setBackgroundColor(colors.primary);
        StatusBar.setBarStyle('light-content')
        getData()
    }, [])
    const getData = async () => {
        await getProducts().then(res => {
            setProductList(res.products)
        }).catch(console.error)
    }
    return (
        <View style={{paddingTop:StatusBar.currentHeight}}>
            <Header title="Home" />
            <FlatList
                contentContainerStyle={{
                    backgroundColor: colors.primary,
                    padding: 10,
                    paddingBottom:50
                }}
                numColumns={2}
                data={productList}
                renderItem={({ item, index }) => <ListItems item={item} />}
            />
            <View style={{ position: 'absolute', bottom: 60, right: 20, zIndex: 999999 }}>
                <AddButton />
            </View></View>
    )
}

export default Products

const styles = StyleSheet.create({})