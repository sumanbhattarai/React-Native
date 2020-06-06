import React , {useState , useRef , useEffect} from 'react'
import { View , Text , StyleSheet, Button, Alert } from "react-native";
import CardDesign from '../components/CardDesign';
import Colors from '../constants/colors';

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
    const [ guessNumber , setGuessNumber ] = useState(randomNumber(1 , 100 , props.userChoice))
    const [ rounds , setRounds] = useState(0)
    const currentMin = useRef(1)
    const currentMax = useRef(100)

    useEffect(() => {
        if(guessNumber === props.userChoice){
            props.gameOver(rounds)
        }    
    }, [guessNumber , props.userChoice , props.gameOver])
    const nextGuess = info => {
        if(info==='lower' && guessNumber<props.userChoice || info==='higher' && guessNumber>props.userChoice){
            Alert.alert('Warning !' , 'Dont lie, you fool.' , [{text : 'Okay' , style: 'destructive'}])
            return
        }
        if(info==='lower'){
            currentMax.current = guessNumber
        } else {
            currentMin.current = guessNumber
        }
        setGuessNumber(randomNumber(currentMin.current , currentMax.current , guessNumber)) 
        setRounds(current=>current+1)
    }

    return(
        <CardDesign style={styles.infoBox}>
            <Text style={styles.guessTitle}>Computer Guess is : </Text>
            <Text style={styles.guess}>{guessNumber}</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonStyle}>
                    <Button 
                        title="Lower"  
                        color= {Colors.danger}
                        onPress={()=>nextGuess('lower')}
                    />
                </View>
                <View style={styles.buttonStyle}>
                    <Button 
                        title="Higher" 
                        color={Colors.success} 
                        onPress={()=>nextGuess('higher')}
                    />
                </View>
            </View>
        </CardDesign>
    )
}

const styles = StyleSheet.create({
    infoBox : {
        width : 400,
        maxWidth : '80%',
        alignSelf : 'center',
        padding : 20,
        marginVertical : 20
    },
    guessTitle : {
        fontSize : 20,
        fontFamily : 'ProximaNovaA-Light'
    },
    guess : {
        fontSize : 30 ,
        fontWeight : 'bold',
        fontFamily : 'ProximaNovaA-Light'
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : '100%',
        marginTop : 20
    },
    buttonStyle : {
        width : 100
    }
})