import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity, FlatList , Platform } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Color } from '../constants/constants'
import { useSelector } from 'react-redux'
import PlacesList from '../components/PlacesList'


export default function(props){
    const placesList = useSelector(state=> state.placesReducer.places)

    //adding plus icon on the right side of the screen
    props.navigation.setOptions({
        headerRight : () =>(
            <TouchableOpacity
                style={styles.addIcon}
                onPress={()=>props.navigation.navigate('New Place')}
            >
                <FontAwesomeIcon 
                    icon={faPlus}
                    color={Platform.OS === 'ios' ? Color.primary  : Color.white}
                />
            </TouchableOpacity>
        )
    })

    const renderPlaces = dataItem => {
        return <PlacesList 
                    data={dataItem.item}
                    onClick={()=>{
                        props.navigation.navigate('Place Detail', {
                            placeId : dataItem.item.id
                        })
                    }}
                />
    }

    return(
        <FlatList
            data={placesList}
            renderItem={renderPlaces}
        />
    )
}

const styles=StyleSheet.create({
    addIcon :  {
        marginRight : 20
    }
})