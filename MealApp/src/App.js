import React from 'react'
import {View , Text} from 'react-native'
import { Color , Font} from './constants/customDesign'

export default function(){
  return(
    <View>
        <Text style={{ color : Color.primary, fontFamily : Font.bold}}>App Screen</Text>
    </View>
  )
}