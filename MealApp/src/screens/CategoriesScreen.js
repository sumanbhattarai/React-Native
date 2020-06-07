import React from 'react'
import {View , Text, Button} from 'react-native'

export default function(props){
  return(
    <View>
        <Text>Categories Screen</Text>
        <Button
          title="Go to Meals Screen"
          onPress={()=>{
              props.navigation.navigate('Meals')
          }}
        />
    </View>
  )
}