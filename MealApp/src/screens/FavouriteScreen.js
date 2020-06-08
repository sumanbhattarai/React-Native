import React from 'react'
import {View , Text, Button , FlatList} from 'react-native'
import {Meals} from '../data/Dummy-data'
import MealBox from '../components/MealBox'

export default function (props) {
  const favData = Meals.filter(el=>el.id=== 'm1' || el.id==='m2')

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
  return(
    <FlatList
      data={favData}
      renderItem={renderFav}
    />
  )
}