import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Buttons = (props) => {
    const { title, onPress } = props
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
        margin: 16
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '700',
        color: colors.primary,
        textAlign: 'center'
    }
})