import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, ForgotPassword, Register } from '../screens'
import { COLORS, ROUTES } from '../constants'
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
    // console.log(Stack)
    return (
        <Stack.Navigator initialRouteName={ROUTES.LOGIN} screenOptions={{
            headerTintColor: COLORS.white,
            headerBackTitle: 'Back',
            headerStyle: {
                backgroundColor: COLORS.primary
            }
        }}>
            <Stack.Screen name={ROUTES.LOGIN} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} options={({ route }) => ({ title: route.params.userId, })} />
            <Stack.Screen name={ROUTES.REGISTER} component={Register} />
            <Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AuthNavigator

const styles = StyleSheet.create({})