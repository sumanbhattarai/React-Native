import { Meals } from '../../data/Dummy-data'
import { TOGGLE_FAVOURITE  , TOGGLE_FILTER } from '../actions/meals'

const initialState = {
    meals : Meals,
    filteredMeals : Meals,
    favouriteMeals : []

}
const mealsReducer  = (state =initialState, action)=> {
    switch( action.type){
        case TOGGLE_FAVOURITE :
             const index = state.favouriteMeals.findIndex(el=>el.id === action.mealId )
             if (index >=0) {
                 const favouriteMeals = [...state.favouriteMeals]
                 favouriteMeals.splice(index , 1)
                 return {
                     ...state ,
                     favouriteMeals : favouriteMeals
                 }
             } else {
                 const newMeal = state.meals.find(el=>el.id===action.mealId)
                 return {
                     ...state ,
                     favouriteMeals : state.favouriteMeals.concat(newMeal)
                 }
             }
        case TOGGLE_FILTER :
            console.log('filtering...')
            const appliedFilter = action.requiredFilter
            const updatedMeals = state.meals.filter(el=>{
                if(!el.isGlutenFree && appliedFilter.selectGlutenFree){
                    return false
                }
                if(!el.isLactoseFree && appliedFilter.selectLactoseFree){
                    return false
                }
                if(!el.isVegeterian && appliedFilter.selectVegeterian){
                    return false
                }
                return true
            })
            return {
                ...state ,
                 filteredMeals :  updatedMeals
            }
        default : 
             return state
    }
}

export default mealsReducer