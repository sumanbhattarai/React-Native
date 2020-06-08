import React ,  {useState} from 'react'
import {View , Text, Button , StyleSheet , TouchableOpacity } from 'react-native'
import { Color , Font } from '../constants/customDesign'
import { Meals } from '../data/Dummy-data'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function(props){
  const { mealId } = props.route.params
  const mealDetail = Meals.find(el=>el.id === mealId)
  const [ isStarClick , setStarClick ] = useState(false)

  const toggleStarClick = ()=> {
    setStarClick( startClick => !startClick )
  }
  props.navigation.setOptions({
    title : mealDetail.title,
    headerRight : ()=> (
      <TouchableOpacity 
        style={styles.icon}
        onPress={toggleStarClick}
      >
          <FontAwesomeIcon 
              icon={faStar} 
              color={ isStarClick ? Color.yellow : Color.white } 
          />
      </TouchableOpacity>
    )
  })
  return(
    <View>
        <Text>{mealDetail.title}</Text>
        <Text>{mealDetail.affordability}</Text>
        <Text>{mealDetail.complexity}</Text>
        <Text>{mealDetail.duration}</Text>
        <Text>{mealDetail.instructions}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  icon : {
    marginRight : 20
  }
})