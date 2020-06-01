import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Value } from 'react-native-reanimated'

import SvgUri from 'react-native-svg-uri';

import Track from '../../../assets/track.svg'
import NewSvg from '../../../assets/new.svg';
import Topitem from '../../../assets/top.svg'
import Trending from '../../../assets/graph.svg'
import Clothing from '../../../assets/clothing.svg'
import Shoes from '../../../assets/sport.svg'
import Hanger from '../../../assets/hanger.svg'
import Accessories from '../../../assets/winter-hat.svg'

const HomeScreen = ({ navigation }) => {
    const [gridList, setGLidList] = useState([
        { name: "Topitem", namekey: "topitem", key: 'a', icon: Topitem, color: '#0043ff' },
        { name: "Trending", nameKey: "trending", key: 'b', icon: Trending, color: '#e2d702' },
        { name: "New in", nameKey: "newin", key: 'c', icon: NewSvg, color: '#02e2b6' },
        { name: "Clothing", nameKey: "clothing", key: 'd', icon: Hanger, color: '#d308b1' },
        { name: "Shoes", nameKey: "shoes", key: 'e', icon: Shoes, color: '#c12303' },
        { name: "Accessories", nameKey: "accessories", key: 'f', icon: Accessories, color: '#ff8c00' },
        { name: "Activewears", nameKey: "activewears", key: 'g', icon: Track, color: '#04dbd7' }
    ])


    const onPressMenu = id => {
        console.warn('<<<: ', id)
        navigation.navigate('homecategoryitem', { names: id })
    }


    const renderItem = ({ item, index }) => {
        return <View style={{
            flex: 1,
            margin: 5,
            minWidth: 170,
            maxWidth: 223,
            height: 204,
            maxHeight: 304,
            backgroundColor: item.color ? item.color : '#CCC',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity
                onPress={() => onPressMenu(item.nameKey)}
            >
                <SvgUri
                    style={{ marginRight: 30, width: 30 }}
                    width='50'
                    height='100'
                    source={item.icon}
                />
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    }


    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                // numColumns={2}
                data={gridList}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: "#eb3345",
        // justifyContent: "flex-end",
    },
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 100
    },
})
export default HomeScreen;
