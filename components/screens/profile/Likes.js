import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import LikesItem from '../../reusables/LikesItem'
import IIcon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import * as Font from 'expo-font';

const Likes = () => {
    const [list, setList] = useState([{ name: 'user1' }, { name: 'user1' }, { name: 'user1' }, { name: 'user1' }, { name: 'user1' }, { name: 'user1' }, { name: 'user1' }])
    const [isfontLoaded, setisfontLoaded] = useState(false)


    useEffect(() => {
        Font.loadAsync({
            'Roboto-MediumItalic': require('../../../assets/fonts/Roboto-MediumItalic.ttf'),
            'Roboto-BoldItalic': require('../../../assets/fonts/Roboto-BoldItalic.ttf')
        }).then(() => {
            setisfontLoaded(true)
        })
    }, [])
    return (

        <View>
            {
                !isfontLoaded ? (<View><Text>Loading</Text></View>) : (
                    <>
                        <View style={styles.backAndTitleHolder}>
                            <IIcon name="ios-arrow-back" size={25} color='black' style={styles.arrow} />
                            <Text style={{ ...styles.likestitle, fontFamily: 'Roboto-BoldItalic' }}>Likes</Text>
                        </View>
                        <ScrollView style={{ backgroundColor: 'white' }}>
                            <View style={styles.container}>

                                {
                                    list.map((item, index) => {
                                        return (
                                            <LikesItem />

                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    </>
                )
            }

        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 100
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
export default Likes;