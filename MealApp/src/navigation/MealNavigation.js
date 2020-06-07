import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import CategoriesScreen from '../screens/CategoriesScreen'
import MealsScreen from '../screens/MealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import {Color , Font} from '../constants/customDesign'

const Stack = createStackNavigator()
export default function(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle : {
                        backgroundColor : Color.primary,
                    },
                    headerTintColor : Color.white,
                    headerTitleStyle : {
                        fontFamily : Font.bold
                    }
                }}
            >
                <Stack.Screen 
                    name="Categories" 
                    component={CategoriesScreen} 
                />
                <Stack.Screen 
                    name="Meals" 
                    component={MealsScreen}
                />
                <Stack.Screen 
                    name="MealDetails" 
                    component={MealDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

