import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import AIcon from 'react-native-vector-icons/Octicons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import * as Font from 'expo-font';

const Search = () => {

    const [searchList, setsearchList] = useState([{ name: 'Hi' }, { name: 'Billy' }, { name: 'Claud' }])
    const [categoryList, setcategoryList] = useState([{ name: 'Clothing' }, { name: 'Shoes' }, { name: 'Bags' }, { name: 'Accessories' }, { name: 'Active wears' }])
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
        <ScrollView>
            <View style={styles.container}>
                <StatusBar hidden={false} />

                <View style={styles.searchbarContainer}>
                    <TextInput
                        undelineColorAndroid="transparent"
                        placeholder='Try Jeans' style={styles.searchField} />
                    <AIcon name="search" size={20} color='black' style={styles.searchIcon} />
                </View>
                {
                    searchList.map((item, index) => {
                        return (
                            <View style={styles.searchListContainer}>
                                <AIcon name='clock' size={15} color='gray' style={styles.clock} />
                                <Text>{item.name}</Text>
                            </View>
                        )
                    })
                }
                <Text style={styles.searchByCate}>Flash Sales:</Text>

                {
                    !isfontLoaded ? (<View><Text>Loading</Text></View>) : (

                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}

                        >

                            {
                                categoryList.map((item, index) => (


                                    <TouchableOpacity TouchableOpacity TouchableOpacity
                                        onPress={() => console.warn('')}
                                        style={{ marginLeft: 5, elevation:2, padding:5,marginTop:20, borderRadius:2}}
                                    >
                                        <Image
                                            source={require('../../../assets/babyblue.jpg')}
                                            style={styles.image}
                                            resizeMode='contain' />

                                        <View style={styles.detailsHolder}>
                                            <Text style={{ color: 'gray', fontSize: 14, fontFamily: 'Roboto-MediumItalic' }}>Designer</Text>
                                            <Text style={{ fontSize: 16, fontFamily: 'Roboto-MediumItalic' }}>{'item.name'}</Text>
                                            <View style={styles.likesholder}>
                                                <Text style={{ fontSize: 14, fontFamily: 'Roboto-BoldItalic' }}>₦200</Text>
                                                <TouchableOpacity>
                                                    <FIcon name="heart-o" size={20} color="black" />
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </TouchableOpacity>

                                ))
                            }

                        </ScrollView>


                    )
                }




                <Text style={styles.searchByCate}>Search by category:</Text>
                {
                    categoryList.map((item, index) => {
                        return (
                            <View style={styles.searchListContainer}>
                                <Text style={styles.cateTitle}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </View >
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    searchListContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',

        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
        padding: 8,
        paddingTop: 15,
        paddingBottom: 15
    },
    searchbarContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 5,
        borderBottomWidth: 1,


        // flex: 3
    },
    searchField: {
        flex: 2,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold'
        // padding:5
    },
    searchIcon: {
        // flex: 1
    },
    likesholder: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    clock: {
        marginRight: 5
    },
    searchByCate: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 30,
        paddingBottom: 0,
        paddingLeft: 5
    },
    cateTitle: {
        fontWeight: 'bold'
    },
    image: {
        width: 150,
        height: 104,
        elevation: 3,
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        borderRadius:15
    },
    flashSales: {
        flexDirection: 'row'
    },
    detailsHolder: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        width:150
    }
})
export default Search;