import 'react-native-gesture-handler';
import React from 'react'
import { Platform } from 'react-native'
import {  NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PlaceListScreen from '../screen/PlaceListScreen'
import PlaceDetailScreen from '../screen/PlaceDetailScreen'
import NewPlaceScreen from '../screen/NewPlaceScreen'
import MapScreen from '../screen/MapScreen'
import { Color } from '../constants/constants';

const Stack = createStackNavigator()
export default function(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor : Platform.OS === 'ios' ? Color.primary : 'white',
                    headerStyle : {
                        backgroundColor : Platform.OS === 'android' ? Color.primary : 'white'
                    },
                    
                }}
            >
                <Stack.Screen
                    name="Place List"
                    component={PlaceListScreen}
                />
                <Stack.Screen
                    name="Place Detail"
                    component={PlaceDetailScreen}
                />
                <Stack.Screen
                    name="New Place"
                    component={NewPlaceScreen}
                />
                <Stack.Screen
                    name="Place Map "
                    component={MapScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}