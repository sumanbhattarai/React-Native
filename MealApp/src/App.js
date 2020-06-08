import React from 'react'
import DrawerNavigation from './navigation/DrawerNavigation'
import { createStore , combineReducers } from 'redux'
import {  Provider } from 'react-redux'
import mealsReducer from './store/reducers/meals'

const rootReducer = combineReducers({
    meals: mealsReducer
})

const store = createStore(rootReducer)


export default function(){
    return <Provider store={store}><DrawerNavigation/></Provider>
}