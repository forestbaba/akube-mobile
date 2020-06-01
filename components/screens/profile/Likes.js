import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LikesItem from '../../reusables/LikesItem'
import IIcon from 'react-native-vector-icons/Ionicons'

const Likes = () => {
    const [list, setList] = useState([{ name: 'user1' }, { name: 'user1' }, { name: 'user1' }, { name: 'user1' }, { name: 'user1' }, { name: 'user1' }, { name: 'user1' }])

    return (
        <View style={styles.container}>
            <IIcon name="ios-arrow-back" size={25} color='black' style={styles.arrow} />
            <Text style={styles.likestitle}>Likes</Text>
            {
                list.map((item, index) => {
                    return (
                        <LikesItem />

                    )
                })
            }
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
    },
    arrow: {
        margin: 20
    },
    likestitle: {
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 22
    }
})
export default Likes;