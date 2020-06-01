import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './profile'
import Likes from './Likes'


const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="profile" component={Profile}/>
            <Stack.Screen name="likes" component={Likes} />
        </Stack.Navigator>
    );
}

export default ProfileStack;