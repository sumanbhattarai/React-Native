import React,  { useState } from 'react'
import { View , Text , ScrollView , Dimensions } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'

const screen_width = Dimensions.get('screen').width

export default function(){
  const slider = [ 'red' ,  'blue' , 'orange']
  const [activeSlide , setActiveSlide] = useState(0)

  const handleSlide = ({nativeEvent})=>{
    const index = Math.round(nativeEvent.contentOffset.x / screen_width)
    if( index !== activeSlide){
      setActiveSlide(index)
    }
  }
  return(
    <>
      <View style={{ height : 500 }}>
        <ScrollView 
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleSlide}
        >
          { slider.map((el , index)=>{
            return(
              <View key={index} style={{ width : screen_width , backgroundColor : el}}>

              </View>
            )
          })}
        </ScrollView>
      </View>
      <View style={{ alignItems :'center' , justifyContent : 'center' , flexDirection : 'row' , marginTop : 10}}>
        { slider.map((el , index)=>{
          return(
            <Icon 
              key={index} 
              name={ activeSlide ===index ? 'circle' : 'circle-o'}
              size={10} 
              color="black"
              style={{ padding : 5}}
            />
          )
        })}
      </View>
    </>
  )
}