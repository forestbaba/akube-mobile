import React, { useState } from 'react'
import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native'
import LikesItem from '../../reusables/LikesItem'

const Cart = () => {
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text>Cart</Text>
            {
                list.map((item, index) => {
                    return (
                        <LikesItem id={index} />
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Cart;