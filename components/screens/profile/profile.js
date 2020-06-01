import React, { Profiler } from 'react'
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import Fullnamefield from '../../reusables/FullnameField'
import ActionTitles from '../../reusables/ActionTitles'
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Badge } from 'native-base'

const Profile = ({navigation}) => {

    const gotoLikes = () => {
        navigation.navigate('likes')
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar />
                <Image source={require('../../../assets/babyblue.jpg')}
                    resizeMode="cover" style={styles.image} />
                <View style={styles.likes} >
                    <TouchableOpacity onPress={gotoLikes}>
                        <MIcons name="heart" color={'Black'} size={20} />
                        <Text style={styles.badgeInfo}>6</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.namecontainer}>
                    <Fullnamefield name={"Paul james"} />

                    <Text style={styles.email}>wale@gmail.com</Text>
                </View>

                <View style={styles.optionContainer}>
                    <ActionTitles title={"My Address"} iconname={'location-on'} />
                    <ActionTitles title={"Account"} iconname={'person'} />
                    <ActionTitles title={"Notifications"} iconname={'notifications'} />
                    <ActionTitles title={"Password"} iconname={'lock'} />
                    <ActionTitles title={"Wallet"} iconname={'account-balance-wallet'} />
                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    email: {
        color: 'gray'
    },
    optionContainer: {
        marginTop: 50
    },
    namecontainer: {
        marginTop: 20,
        marginLeft: 10
    },
    likes: {
        top: 20,
        right: 30,
        position: 'absolute'
    },
    badgeInfo: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 20,

        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -28,
        padding: 1,
        marginLeft: 15,
        fontSize: 10
        // position: 'absolute',

    }
})
export default Profile; 