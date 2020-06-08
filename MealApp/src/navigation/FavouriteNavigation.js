import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator } from '@react-navigation/stack'
import FavouriteScreen from '../screens/FavouriteScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import { Color , Font} from '../constants/customDesign'

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
            <Stack.Screen name="Favourites" 
                component={FavouriteScreen}
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
            <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
        </Stack.Navigator>
    )
}