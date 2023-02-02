import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Settings, SettingsDetail } from '../screens'
import { COLORS, ROUTES } from '../constants'
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function SettingsNavigator() {
    // console.log(Stack)
    return (
        <Stack.Navigator initialRouteName={ROUTES.LOGIN} screenOptions={{
            headerTintColor: COLORS.white,
            headerBackTitle: 'Back',
            headerStyle: {
                backgroundColor: COLORS.primary
            }
        }}>
            <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
            <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
        </Stack.Navigator>
    );
}

export default SettingsNavigator

const styles = StyleSheet.create({})