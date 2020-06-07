import React from 'react'
import {View , Text, Button} from 'react-native'

export default function(props){
  return(
    <View>
        <Text>MealDetails Screen</Text>
        <Button
          title="Go back"
          onPress={()=>{
            props.navigation.popToTop()
          }}
        />
    </View>
  )
}