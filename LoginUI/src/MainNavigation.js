import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Initial from './Initial'
import Login from './Login'

const Stack = createStackNavigator()

export default function(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                headerMode= 'none'
            >
                <Stack.Screen name="Initial" component={Initial} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}