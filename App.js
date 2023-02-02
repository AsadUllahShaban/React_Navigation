import * as React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/naviagations/AuthNavigator';

export default function App() {
    // isAuthenticated = true or false
    return (
        <NavigationContainer /*{isAuthenticated ? AuthNavigator : DrawerNavigator} */>
            <AuthNavigator />
        </NavigationContainer>
    );
}


