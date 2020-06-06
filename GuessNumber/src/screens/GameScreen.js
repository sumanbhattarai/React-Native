import React , {useState} from 'react'
import { View , Text , StyleSheet, Button } from "react-native";

const randomNumber = ( min , max , exclude )=>{
    let minNumber = Math.ceil(min)
    let maxNumber = Math.floor(max)
    const randomNum = Math.floor(Math.random()*(maxNumber-minNumber)) + minNumber
    if(randomNum === exclude){
        randomNumber(min , max , exclude)
    } else {
        return randomNum
    }
}
export default function(props){
    const [ guessNumber , setGuessNumber ] = useState(randomNumber(1 , 100 , props.choosenNumber))
    return(
        <View>
            <Text>Computer Guess is : </Text>
            <Text>{guessNumber}</Text>
            <View>
                <Button title="Lower" />
                <Button title="Higher" /> 
            </View>
        </View>
    )
}