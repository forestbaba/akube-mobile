import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Fullname = ({ name }) => {
    return (
        <View>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 20
    }
})
export default Fullname;