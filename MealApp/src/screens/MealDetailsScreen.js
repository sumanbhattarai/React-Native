import React ,  {useState} from 'react'
import {View , Text, Image , StyleSheet , ScrollView , TouchableOpacity } from 'react-native'
import { Color , Font } from '../constants/customDesign'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar , faHandPointRight  , faTimesCircle , faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { useSelector , useDispatch } from 'react-redux'
import { toggleFavourite } from '../store/actions/meals'
import MealDetailHeading from '../components/MealDetailHeading'

export default function(props){
  const { mealId } = props.route.params
  const meals = useSelector(state=>state.meals.meals)
  const favMeals = useSelector(state=>state.meals.favouriteMeals)
  const dispatch = useDispatch()
  const mealDetail = meals.find(el=>el.id === mealId)

  // return boolean this item is in fav list or not.
  const isFav = favMeals.findIndex(el=>el.id === mealDetail.id) >=0

  const [ isStarClick , setStarClick ] = useState(isFav)

  const toggleStarClick = ()=> {
    setStarClick( startClick => !startClick )
    dispatch(toggleFavourite(mealId))
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

  const valid = data => {
    if(mealDetail[data]=== true){
      return <FontAwesomeIcon color="green" icon={faCheckCircle} />
    } else {
      return <FontAwesomeIcon color="red" icon={faTimesCircle} />
    }
  }
  return(
    <ScrollView style={{margin : 20}}>
        <View style={styles.detailBox}>
            <Image source={{uri : mealDetail.imageUrl }} style={{height : 180 , width : '100%'}} />
            <View style={styles.infoBox}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>{mealDetail.title}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>Duration : (min) {'\n'} {mealDetail.duration} </Text>
                    <Text style={styles.infoText}>Complexity : {'\n'} {mealDetail.complexity}</Text>
                    <Text style={styles.infoText}>Affordability : {'\n'} {mealDetail.affordability} </Text>
                </View>
            </View>
        </View>
        <View style={styles.ingredietBox}>
            <MealDetailHeading>Ingredients</MealDetailHeading>
            <Text style={styles.ingredients}>
              {mealDetail.ingredients.map(el=>{
                return mealDetail.ingredients.indexOf(el) === mealDetail.ingredients.length- 1 ? `and ${el}.` : `${el}, `
              })}
            </Text>
        </View>
        <View style={styles.stepBox}>
            <MealDetailHeading>Steps</MealDetailHeading>
                {mealDetail.instructions.map((el , index)=>{
                    return(
                      <View key={index} style={styles.instructionBox}>
                        <Text style={styles.instruction}> <FontAwesomeIcon icon={faHandPointRight}/>   {el}</Text>
                      </View>
                    )
                })}
        </View>
        <MealDetailHeading>Alert !</MealDetailHeading>
        <View style={styles.alertInfo}>
            <Text style={styles.alertText}> {valid('isVegeterian')} Vegeterian </Text>
            <Text style={styles.alertText}> {valid('isGlutenFree')} Gluten Free </Text>
            <Text style={styles.alertText}> {valid('isLactoseFree')} Lactose Free </Text>
        </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  icon : {
    marginRight : 20
  },
  detailBox : {
    height : 250
  },
  infoBox : {
      height : 70,
      backgroundColor : Color.primary ,
      flex : 1
  },
  titleBox : {
      flex : 1 , 
      justifyContent :'center'
  },
  title : {
      textAlign : 'center' ,
      fontFamily : Font.bold ,
      color :  Color.white ,
      fontSize : 15
  },
  info : {
      flexDirection : 'row',
      justifyContent : 'space-around',
      flex : 1 ,
      backgroundColor : '#707070' ,
      alignItems : 'center'
  },
  infoText: {
      fontSize : 10,
      fontFamily : Font.bold,
      color : Color.white
  },
  heading : {
    fontFamily  : Font.bold ,
    fontSize : 20,
    marginTop : 10
  },
  ingredients : {
    fontFamily : Font.light,
    fontSize : 12
  },
  instructionBox : {
    marginBottom : 10
  },
  instruction : {
    fontSize : 12 ,
    fontFamily : Font.light
  },
  alertInfo : {
    flexDirection  :'row',
    justifyContent : 'space-around'
  },
  alertText : {
    fontFamily : Font.light ,
    fontSize : 12
  }

})