import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import MealsScreen from '../screens/MealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import {Color , Font} from '../constants/customDesign'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Stack = createStackNavigator()
export default function(props){
    return(
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
                    options={{
                        headerLeft : () => (
                            <TouchableOpacity
                                style={{marginLeft : 20}}
                                onPress={()=>{
                                    props.navigation.openDrawer()
                                }}
                            >
                                <FontAwesomeIcon 
                                    icon={faBars}
                                    color={Color.white}  
                                />
                            </TouchableOpacity>
                          )
                    }}
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
    )
}

