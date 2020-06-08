import { Meals } from '../../data/Dummy-data'

const initialState = {
    meals : Meals,
    filteredMeals : Meals,
    favouriteMeals : []

}
const mealsReducer  = (state =initialState, action)=> {
    return state
}

export default mealsReducer