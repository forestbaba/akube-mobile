import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import SvgUri from 'react-native-svg-uri'

const gridView = () => {


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
            <TouchableOpacity>
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
}
export default gridView;
