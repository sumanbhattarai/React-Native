import React , {useState , useEffect} from 'react'
import {View , Text , StyleSheet , Switch} from 'react-native'
import MealDetailHeading from '../components/MealDetailHeading'
import { Color , Font} from '../constants/customDesign'

export default function(){
  const [ chooseVegeterian , setVegeterian] = useState(false)
  const [ chooseLactoseFree , setLactoseFree] = useState(false)
  const [ chooseGlutenFree , setGlutenFree] = useState(false)

  useEffect(() => {
      console.log( chooseVegeterian , chooseLactoseFree , chooseGlutenFree)
  })
  const RenderFilter = props => {
    return(
      <View style={styles.filterContainer}>
          <Text style={styles.filterTitle}> {props.name}</Text>
          <Switch 
            label="Vegeterian"
            trackColor={{true : Color.primary}}
            thumbColor={Color.white}
            value={props.state}
            onValueChange={props.onChange}
          />
      </View>
    )
  }
  return(
    <View style={styles.container}>
        <MealDetailHeading style={styles.heading}>Available Filters !</MealDetailHeading>
        <RenderFilter
            name="Vegeterian"
            state={chooseVegeterian}
            onChange={newValue=>setVegeterian(newValue)}
        />
        <RenderFilter
            name="Lactose free"
            state={chooseLactoseFree}
            onChange={newValue=>setLactoseFree(newValue)}
        />
        <RenderFilter
            name="Gluten Free"
            state={chooseGlutenFree}
            onChange={newValue=>setGlutenFree(newValue)}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({
  container  : {
    margin : 20
  },
  heading : {
    fontSize : 15
  },
  filterContainer : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center' ,
    width : '100%' , 
    marginVertical : 20
  },
  filterTitle : {
    fontFamily : Font.light
  }
})