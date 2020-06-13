import { ADD_PLACE } from '../action/places'
import Place from '../../model/place'

const initialState = {
    places : []
}

export default function ( state = initialState , action){
    switch (action.type){
        case ADD_PLACE : 
            const newPlace = new Place( new Date().toString() , action.placeData.title , action.placeData.address , action.placeData.src)
            return {
                ...initialState ,
                places : state.places.concat(newPlace)
            }
        
        default : 
            return state
    }
}