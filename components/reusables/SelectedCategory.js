import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ImageSlider from 'react-native-image-slider';
import { Card, CardItem, } from 'native-base'
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MAIcons from 'react-native-vector-icons/MaterialIcons'
import SelectedCategoryItem from './SelectedCategoryItem'
import { ScrollView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';

const SelectedCategory = () => {

    const images = [
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/animals',
        'https://placeimg.com/640/640/beer',
        'https://placeimg.com/640/640/beer',
        'https://placeimg.com/640/640/beer',
        'https://placeimg.com/640/640/beer',
        'https://placeimg.com/640/640/beer',
    ];
    const [isfontLoaded, setisfontLoaded] = useState(false)




    useEffect(() => {
        Font.loadAsync({
            'Roboto-MediumItalic': require('../../assets/fonts/Roboto-MediumItalic.ttf'),
            'Roboto-BoldItalic': require('../../assets/fonts/Roboto-BoldItalic.ttf')
        }).then(() => {
            setisfontLoaded(true)
        })
    }, [])
    return (
        <>
            {
                !isfontLoaded ? (<View><Text>Loading</Text></View>) : (
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.imageSlider}>
                                <ImageSlider
                                    loopBothSides
                                    autoPlayWithInterval={3000}
                                    images={[
                                        'http://placeimg.com/640/480/any',
                                        'http://placeimg.com/640/480/any',
                                        'http://placeimg.com/640/480/any'
                                    ]} />
                            </View>
                            {
                                images.map((item, index) => {
                                    return (
                                        <SelectedCategoryItem key={index}/>

                                    )
                                })
                            }

                        </View>
                    </ScrollView>

                )

            }
        </>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageSlider: {
        backgroundColor: 'red',
        height: 300
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 0,
        marginTop: 10
        // borderRadius:100
    },
    itemcontainer: {
        flexDirection: 'row',
    },
    itemname: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
        paddingRight: 140
    },
    storeicon: {
        width: 50,
        height: 50,
        borderRadius: 150,
        borderWidth: 1,
        // borderColor: 'red'
    },
    storecontainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    likeicon: {
        position: 'absolute',
        right: 5,
        top: 15
    },
    cardStyle: {
        marginLeft: 5,
        marginRight: 5,
        margin: 5,
        borderRadius: 2,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        padding: 5
    },
    locationContainer: {
        flexDirection: 'row'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16
    },
    itemdetails: {
        padding: 5
    }
})
export default SelectedCategory