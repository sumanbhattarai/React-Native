import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from '../navigation/BottomTabNavigation'
import FilterNavigation from './FilterNavigation'
import { Color , Font} from '../constants/customDesign'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUtensils , faFilter } from '@fortawesome/free-solid-svg-icons'

const Drawer = createDrawerNavigator()

export default function(){
    return(
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor : Color.primary,
                    labelStyle: {
                        fontFamily : Font.bold
                    }
                }}
            >
                <Drawer.Screen 
                    name = "Meals" 
                    component={BottomTabNavigation}
                    options={{
                        drawerIcon : ()=> <FontAwesomeIcon icon={faUtensils} />
                    }} 
                />
                <Drawer.Screen 
                    name =" Filter Meals" 
                    component={FilterNavigation}
                    options={{
                        drawerIcon : ()=> <FontAwesomeIcon icon={faFilter} />
                    }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}