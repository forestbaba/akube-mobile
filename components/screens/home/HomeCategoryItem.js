import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import * as Font from 'expo-font';

import SvgUri from 'react-native-svg-uri'
import FIcon from 'react-native-vector-icons/FontAwesome'

const ScreenWidth = Dimensions.get('window').width
const HomeCategoryItem = ({ route }) => {
    const [gridList, setGLidList] = useState([
        { name: "Topitem", namekey: "topitem", key: 'a', color: '#0043ff' },
        { name: "Trending", nameKey: "trending", key: 'b', color: '#e2d702' },
        { name: "New in", nameKey: "newin", key: 'c', color: '#02e2b6' },
        { name: "Clothing", nameKey: "clothing", key: 'd', color: '#d308b1' },
        { name: "Shoes", nameKey: "shoes", key: 'e', color: '#c12303' },
        { name: "Accessories", nameKey: "accessories", key: 'f', color: '#ff8c00' },
        { name: "Activewears", nameKey: "activewears", key: 'g', color: '#04dbd7' }
    ])
    const [isfontLoaded, setisfontLoaded] = useState(false)




    useEffect(() => {
        Font.loadAsync({
            'Roboto-MediumItalic': require('../../../assets/fonts/Roboto-MediumItalic.ttf'),
            'Roboto-BoldItalic': require('../../../assets/fonts/Roboto-BoldItalic.ttf')
        }).then(() => {
            setisfontLoaded(true)
        })
    }, [])

    const selectedItem = id => {
        console.log('The id : ', id)
    }


    const renderItem = ({ item, index }) => {
        return <View style={{
            flex: 1,
            // margin: 5,
            marginLeft:5,
            minWidth: 170,
            maxWidth: -ScreenWidth / 4,
            height: 274,
            maxHeight: 304,
            // backgroundColor: '#CCC',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity
                onPress={() => selectedItem(item.nameKey)}
            >
                <Image
                    source={require('../../../assets/babyblue.jpg')}
                    style={styles.image}
                    resizeMode='contain' />

                <View style={styles.detailsHolder}>
                    <Text style={{ color: 'gray', fontSize: 14, fontFamily: 'Roboto-MediumItalic' }}>Designer</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Roboto-MediumItalic' }}>{item.name}</Text>
                    <View style={styles.likesholder}>
                        <Text style={{ fontSize: 18, fontFamily: 'Roboto-BoldItalic' }}>₦200</Text>
                        <TouchableOpacity>
                            <FIcon name="heart-o" size={25} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    }

    return (


        <View style={styles.container}>
            {
                !isfontLoaded ? (<View><Text>Loading</Text></View>) : (
                    <>
                        <Text>Wos {route.params.names}</Text>
                        <FlatList
                            contentContainerStyle={styles.list}
                            data={gridList}
                            renderItem={renderItem}
                        />
                    </>
                )
            }


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 100
    },
    image: {
        width: 190,
        height: 204,
    },
    likesholder: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    detailsHolder: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    }

})
export default HomeCategoryItem;