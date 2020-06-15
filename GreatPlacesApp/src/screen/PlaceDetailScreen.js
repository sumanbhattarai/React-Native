import React from 'react'
import { View , Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function(props){
    const  { placeId } = props.route.params
    const selectedPlace = useSelector(state=>state.placesReducer.places.find(el=> el.id === placeId))

    // set title of the screen to title of the place
    props.navigation.setOptions({
        title : selectedPlace.title
    })
    return(
        <View>
            <Text>Place Detail Screen</Text>
        </View>
    )
}