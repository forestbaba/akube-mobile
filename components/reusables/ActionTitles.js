import React from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import FIcon from 'react-native-vector-icons/MaterialIcons'

const width = Dimensions.get('window').width
const ActionTitles = ({ title, onPress, iconname }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <FIcon name={iconname} size={25} color="#c7c6cb" />
                <Text style={styles.title}>{title}</Text>
                <View style={styles.arrowContainer}>
                    <FIcon name={"keyboard-arrow-right"} size={25} color="#c7c6cb" />
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width,
        borderBottomWidth: 1,
        borderColor: '#d9d9db',
        paddingBottom: 15,
        marginBottom: 15,
        marginVertical: 10,
        // marginHorizontal: 20


    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        paddingBottom:5
    },
    arrowContainer: {
        position: 'absolute',
        right: 30
    }
})
export default ActionTitles;