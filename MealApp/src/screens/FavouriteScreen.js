import React from 'react'
import {View , Text, Button , FlatList} from 'react-native'
import MealBox from '../components/MealBox'
import { useSelector } from 'react-redux'
import { Font } from '../constants/customDesign'

export default function (props) {
  const favData = useSelector(state=>state.meals.favouriteMeals)

  const renderFav = itemData => {
    return(
      <MealBox 
        data={itemData.item} 
        onClick={(id)=>{
          props.navigation.navigate('Meal Details' , {
            mealId : id
          })
        }}
      />
    )
  }
  if(favData.length >= 1)
  {
    return(
      <FlatList
        data={favData}
        renderItem={renderFav}
      />
    )
  } else {
    return(
      <View style={{ flex : 1 , justifyContent : 'center', alignItems : 'center'}}>
        <Text style={{ fontFamily : Font.bold , fontSize : 12}}>No any favourite meals yet.</Text>
      </View>
    )
  }
    
}