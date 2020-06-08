import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MealNavigation from './MealNavigation'
import { Color , Font } from '../constants/customDesign'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBox , faStar } from '@fortawesome/free-solid-svg-icons'
import FavouriteNavigation from './FavouriteNavigation'

const Tab = Platform.OS === 'ios' ?  createBottomTabNavigator() : createMaterialBottomTabNavigator()
export default function(){
    return(
        Platform.OS==='ios' ?
                    <Tab.Navigator
                        tabBarOptions={{
                            activeTintColor : Color.primary,
                            labelStyle : {
                                fontFamily : Font.bold
                            }
                        }}
                    >
                        <Tab.Screen 
                            name="Category" 
                            component={MealNavigation}
                            options={{
                                tabBarIcon : ({color , size})=> <FontAwesomeIcon icon={faBox} color={color} size={size} />
                            }} 
                        />
                        <Tab.Screen 
                            name="Favourites" 
                            component={FavouriteNavigation}
                            options={{
                                tabBarIcon : ({color , size})=> <FontAwesomeIcon icon={faStar} color={color} size={size} />
                            }} 
                        />
                    </Tab.Navigator>
        :
                    <Tab.Navigator
                        activeColor={Color.primary}
                        barStyle={{ backgroundColor: Color.white }}
                    >
                        <Tab.Screen 
                            name="Category" 
                            component={MealNavigation}
                            options={{
                                tabBarIcon : ({color , size})=> <FontAwesomeIcon icon={faBox} color={color} size={size} />
                            }}
                            barStyle={{backgroundColor : 'red'}}
                        />
                        <Tab.Screen 
                            name="Favourites" 
                            component={FavouriteNavigation}
                            options={{
                                tabBarIcon : ({color , size})=> <FontAwesomeIcon icon={faStar} color={color} size={size} />
                            }} 
                        />
                    </Tab.Navigator>             
    )                 
}