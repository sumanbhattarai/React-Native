import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity, ColorPropType } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Color } from '../constants/constants'

export default function(props){

    //adding plus icon on the right side of the screen
    props.navigation.setOptions({
        headerRight : () =>(
            <TouchableOpacity
                style={styles.addIcon}
                onPress={()=>props.navigation.navigate('New Place')}
            >
                <FontAwesomeIcon 
                    icon={faPlus}
                    color={Color.primary}
                />
            </TouchableOpacity>
        )
    })
    return(
        <View>
            <Text>Place List Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    addIcon :  {
        marginRight : 20
    }
})