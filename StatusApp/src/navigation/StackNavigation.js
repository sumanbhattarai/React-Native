import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryScreen from '../screen/CategoryScreen'
import StatusScreen from '../screen/StatusScreen'
import { Font , Color } from '../constants/default'


const Stack = createStackNavigator()
export default function(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle : {
                    backgroundColor : Color.primary,
                },
                headerTintColor : 'white',
                headerTitleStyle : {
                    fontFamily : Font.primary
                }
            }}
        >
            <Stack.Screen
                name="Category"
                component={CategoryScreen} 
            />
            <Stack.Screen 
                name="Status"
                component={StatusScreen}
            />
        </Stack.Navigator>
    )
}