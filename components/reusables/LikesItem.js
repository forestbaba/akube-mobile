import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LikesItem = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageholder}>
                <Image source={require('../../assets/13_300.png')}
                    resizeMode="cover" style={styles.image} />
            </View>
            <View style={styles.details}>
                <Text  style={styles.itemname}>Designer</Text>
                <Text>$200</Text>
                <Text style={styles.date}>12 Jan, 2020</Text>
                <TouchableOpacity>
                    <Text style={styles.addtobag}>Move to bag</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // flex: 2,
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderColor:'#c7c6cb',
        marginHorizontal:15
    },
    image: {
        width: 100,
        height: 100,
    },
    imageholder: {
        flex: 1
    },
    details: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    addtobag: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        textAlign:'center'
    },
    itemname: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 5,
        paddingBottom:5
    },
    price: {
      fontWeight:'bold'  
    },
    date: {
        color: '#c7c6cb',
        paddingVertical:10
    }
})
export default LikesItem;