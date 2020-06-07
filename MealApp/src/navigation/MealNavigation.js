import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import CategoriesScreen from '../screens/CategoriesScreen'
import MealsScreen from '../screens/MealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

const Stack = createStackNavigator()
export default function(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="Meals" component={MealsScreen} />
                <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

