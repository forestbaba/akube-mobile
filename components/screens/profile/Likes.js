import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LikesItem from '../../reusables/LikesItem'
const Likes = () => {
    return (
        <View style={styles.container}>
            <LikesItem />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    image: {
        width: 100,
        height: 100
    }
})
export default Likes;