import React, { useState } from 'react'
import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native'
import LikesItem from '../../reusables/LikesItem'
import IIcon from 'react-native-vector-icons/Ionicons'

const Cart = () => {
    const [listu, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar />

                <View style={styles.backAndTitleHolder}>
                    <IIcon name="ios-arrow-back" size={25} color='black' style={styles.arrow} />
                    <Text style={styles.likestitle}>Cart</Text>
                </View>  
                {
                    listu.map((item, index) => {
                        return (
                            <LikesItem />
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    arrow: {
        margin: 20
    },
    likestitle: {
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Roboto-BoldItalic'
    },
    backAndTitleHolder: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        elevation: 1
    }
})
export default Cart;