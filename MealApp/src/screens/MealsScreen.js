import React from 'react'
import {View , Text, Button , FlatList} from 'react-native'
import {Categories } from '../data/Dummy-data'
import MealBox from '../components/MealBox'
import { useSelector } from 'react-redux'

const MealsScreen = props => {
  const { catId } = props.route.params
  const selectedCategory = Categories.find(el=> el.id === catId)

  const meals = useSelector(state=> state.meals.meals)
  const selectedMeals = meals.filter(el=>el.categoryId.indexOf(catId)>=0)

  props.navigation.setOptions({
    title : selectedCategory.title
  })

  const renderMeals = (itemData)=>{
      return <MealBox 
                data={itemData.item}
                onClick={(id)=>{
                  props.navigation.navigate('MealDetails' , {
                    mealId : id
                  })
                }}
              />
  }
  return(
    <FlatList 
      data={selectedMeals}
      renderItem={renderMeals}
    />
  )
}


export default MealsScreen