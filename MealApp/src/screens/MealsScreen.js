import React from 'react'
import {View , Text, Button} from 'react-native'

export default function(props){
  return(
    <View>
        <Text>Meals Screen</Text>
        <Button
          title="Go to MealsDetails"
          onPress={()=>{
            props.navigation.navigate('MealDetails')
          }}
        />
    </View>
  )
}