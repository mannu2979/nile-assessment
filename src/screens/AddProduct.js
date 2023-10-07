import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import Header from '../components/Header'
import Buttons from '../components/Buttons'
import { addProduct } from '../apis'
import { useNavigation } from '@react-navigation/native'

const AddProduct = () => {
  const navigation = useNavigation()
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    brand: '',
    category: '',
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  })
  const addToProducts = async () => {
    await addProduct(form).then(res => {
      alert("Product is successfully added");
      navigation.goBack()
    }).catch(error => console.log(error))
  }
  return (
    <View style={styles.container}>
      <Header title="Add Product" />
      <ScrollView>
      <Text style={styles.labels}>Title</Text>
      <TextInput placeholderTextColor={colors.font} placeholder='Title' style={styles.inputs} value={form.title} onChangeText={e => setForm({ ...form, title: e })} />
      <Text style={styles.labels}>Description</Text>
      <TextInput placeholderTextColor={colors.font} placeholder='Description' style={styles.inputs} value={form.description} onChangeText={e => setForm({ ...form, description:e })} />
      <Text style={styles.labels}>Price</Text>
      <TextInput placeholderTextColor={colors.font} placeholder='Price' style={styles.inputs} value={form.price} onChangeText={e => setForm({ ...form, price:e })} />
      <Text style={styles.labels}>Discount Percentage</Text>
      <TextInput placeholderTextColor={colors.font} placeholder='Discount Percentage' style={styles.inputs} value={form.discountPercentage} onChangeText={e => setForm({ ...form, discountPercentage:e })} />
      <Text style={styles.labels}>Brand</Text>
      <TextInput placeholderTextColor={colors.font} placeholder='Brand' style={styles.inputs} value={form.brand} onChangeText={e => setForm({ ...form, brand:e })} />
      <Text style={styles.labels}>Category</Text>
      <TextInput placeholderTextColor={colors.font} placeholder='Category' style={styles.inputs} value={form.category} onChangeText={e => setForm({ ...form, category:e })} />
      <Buttons title="Add Product" onPress={addToProducts} />
      </ScrollView>
    </View>
  )
}

export default AddProduct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: StatusBar.currentHeight,
  },
  inputs:{
    borderWidth:1,
    marginHorizontal:20,
    padding:10,
    borderRadius:10,
    color:colors.font,
    borderColor: colors.font,
    marginVertical:10
  },
  labels:{
    fontSize:16,
    color:colors.font,
    fontWeight:"700",
    marginHorizontal:20,
    marginTop:10
  }
})