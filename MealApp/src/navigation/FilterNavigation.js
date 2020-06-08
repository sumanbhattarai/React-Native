import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {Color , Font} from '../constants/customDesign'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import FilterScreen from '../screens/FilterScreen'

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
                name="Filter Meals" 
                component={FilterScreen}
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
        </Stack.Navigator>
    )
}