import React from 'react'
import {View , Text, StyleSheet , FlatList , TouchableOpacity, ColorPropType } from 'react-native'
import {Categories} from '../data/Dummy-data'
import {Color , Font} from '../constants/customDesign'
import Card from '../components/Card'


export default function(props){
  const renderCategories = itemData => {
    return(
      <Card data={itemData.item} onClick={()=>{
        props.navigation.navigate('Meals' , {
          catId : itemData.item.id
        })
      }}
      />
    )
  }
  return(
    <FlatList 
      data={Categories}
      renderItem={renderCategories}
      numColumns={2}
    />
  )
}


const styles=StyleSheet.create({
  
})