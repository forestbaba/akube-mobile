import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import HomeCategoryItem from './HomeCategoryItem'

function Next() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Next Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function HomeStackApp() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="homecategoryitem" component={HomeCategoryItem} />
            </Stack.Navigator>
    );
}

export default HomeStackApp;