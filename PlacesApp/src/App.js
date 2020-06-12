import React from 'react'
import { createStore , combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from  'redux-thunk'
import placesReducer from './store/reducer/places'
import StackNavigation from './navigation/StackNavigation'

const rootReducer = combineReducers({
    placesReducer : placesReducer
})

const store = createStore(rootReducer , applyMiddleware(ReduxThunk))

export default () => <Provider store={store}><StackNavigation/></Provider>