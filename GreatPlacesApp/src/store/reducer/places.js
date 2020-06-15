import { ADD_PLACE , LOAD_PLACE } from '../action/places'
import Place from '../../model/place'

const initialState = {
    places : []
}

export default function ( state = initialState , action){
    switch (action.type){
        case LOAD_PLACE :
            const places  = action.places.map(el=> new Place (el.id ,el.title , el.address, el.imageURI , el.latitiude , el.longitude ))
            return {
                ...initialState, 
                places : places
            }
        case ADD_PLACE : 
            const newPlace = new Place( action.placeData.id , action.placeData.title , action.placeData.address , action.placeData.src)
            return {
                ...initialState ,
                places : state.places.concat(newPlace)
            }
        
        default : 
            return state
    }
}