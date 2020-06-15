import React from 'react'
import { createStore , combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from  'redux-thunk'
import placesReducer from './store/reducer/places'
import StackNavigation from './navigation/StackNavigation'
import { init  } from './db/db'
import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info) , error => console.log(error));

init().then((result)=>{
    console.log('Successfully created db.')
}).catch(error=>{
    console.log(error)
})

// insertAll( new Date().toString() , 'suman' , '21').then((result)=>{
//     console.log('inserted : ' , result)
// }).catch(error=>{
//     console.log('shit happen again')
// })

// deleteAll().then(()=>console.log('deleted')).catch(()=>console.log('error deleting'))

// viewAll().then((result)=>{
//     console.log(result.rows.item(0))
// }).catch(()=>{
//     console.log('noNO')
// })
const rootReducer = combineReducers({
    placesReducer : placesReducer
})

const store = createStore(rootReducer , applyMiddleware(ReduxThunk))

export default () => <Provider store={store}><StackNavigation/></Provider>