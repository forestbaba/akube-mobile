import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './Cart'
import History from './History'


const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="history" component={History} />
        </Stack.Navigator>
    );
}

export default ProfileStack;