export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE"
export const TOGGLE_FILTER = "TOGGLE_FILTER"

export const toggleFavourite = (id)=>{
    return {
        type : TOGGLE_FAVOURITE ,
        mealId : id
    }
}

export const toggleFilter = (obj)=> {
    return {
        type : TOGGLE_FILTER ,
        requiredFilter : obj
    }
}