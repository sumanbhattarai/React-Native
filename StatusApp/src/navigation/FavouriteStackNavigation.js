import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavouriteScreen from '../screen/FavouriteScreen'
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
                name="Favourite"
                component={FavouriteScreen} 
            />
        </Stack.Navigator>
    )
}