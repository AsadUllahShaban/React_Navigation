import * as React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/naviagations/BottomTabNavigator';

export default function App() {
    // isAuthenticated = true or false
    return (
        <NavigationContainer /*{isAuthenticated ? AuthNavigator : DrawerNavigator} */>
            {/* <AuthNavigator /> */}
            <BottomTabNavigator />
        </NavigationContainer>
    );
}


