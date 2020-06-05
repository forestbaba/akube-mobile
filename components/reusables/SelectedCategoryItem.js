import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ImageSlider from 'react-native-image-slider';
import { Card, CardItem, } from 'native-base'
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MAIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SelectedCategory = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.cardStyle}>
                    <View style={styles.itemcontainer}>
                        <Image
                            source={require('../../assets/babyblue.jpg')} style={styles.image}
                            resizeMode='cover' />
                        <View style={styles.itemdetails}>

                            <Text style={styles.itemname}>Long Sleve Long Sleve Long Sleve Long Sleve</Text>
                            <Text style={styles.price}>#300</Text>
                            <View style={styles.locationContainer}>
                                <MAIcons name="location-on" color={'#c7c6cb'} size={23} />
                                <Text>Ikeja</Text>
                            </View>
                        </View>
                        <View style={styles.storecontainer}>
                            <Text>Reyman store</Text>
                            <Image
                                source={require('../../assets/babyblue.jpg')} style={styles.storeicon}
                                resizeMode='contain' />
                        </View>
                        <MIcons name="heart" color={'black'} size={23} style={styles.likeicon} />

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
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
        fontSize: 14,
        fontWeight: 'bold',
        padding: 5,
        paddingRight: 140,
        fontFamily: 'Roboto-BoldItalic'
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
        marginLeft: 10,
        marginRight: 10,
        margin: 5,
        borderRadius: 8,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        padding: 5,

        marginBottom: 10,
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',


    },
    locationContainer: {
        flexDirection: 'row'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 14
    },
    itemdetails: {
        padding: 5
    }
})
export default SelectedCategory