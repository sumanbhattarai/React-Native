import React  , { useState } from 'react'
import { View , Text , Button , StyleSheet, TouchableWithoutFeedback , Keyboard , Alert  } from 'react-native'
import CardDesign from '../components/CardDesign'
import Colors from '../constants/colors'
import Input from '../components/Input'

export default function StartGameScreen(props){
    const [enteredValue , setEnteredValue ] = useState('')
    const [ confirmed , setConfirmed] = useState(false)
    const [selectedNumber , setSelectedNumber] = useState()

    const handleReset = ()=>{
        setEnteredValue('')
        setConfirmed(false)
    }

    const handleConfirm = () => {
        const choosenNumber = parseInt(enteredValue)
        if(isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber >99 ){
            Alert.alert('Invalid Number.', 'Number has to be between 1 to 99.' , [{text : 'Okay' , style : 'destructive' , onPress : handleReset}])
            return
        } 
        setConfirmed(true)
        setSelectedNumber(choosenNumber)
        Keyboard.dismiss()
    }

    let outputText ;
    confirmed ? 
        outputText = (
            <View style={styles.outputBox}>
                <Text style={styles.numberTitle}> Choosen Number is : </Text>
                <Text style={styles.number}>{selectedNumber}</Text>
                <View style={styles.startGameButtonBox}>
                    <Button
                        title = "Start Game"
                        color = {Colors.success}
                        onPress={()=>props.startGame(selectedNumber)}
                    />
                </View>
            </View>
        )
        : null

    return(
        <TouchableWithoutFeedback
            onPress={()=>Keyboard.dismiss()}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game !</Text>
                <CardDesign style={styles.inputContainer}>
                    <Text>Select a Number.</Text>
                    <Input 
                        style={styles.input} 
                        keyboardType="number-pad"
                        blurOnSubmit
                        maxLength={2}
                        onChangeText={el=>setEnteredValue(el.replace(/[^0-9]/g, ''))}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonView}>
                            <Button 
                                title="Reset" 
                                color={Colors.danger}
                                onPress={handleReset}
                            />
                        </View>
                        <View style={styles.buttonView}>
                            <Button 
                                title="Confirm" 
                                color={Colors.success} 
                                onPress={handleConfirm}
                            />
                        </View>
                    </View>
                </CardDesign>
                {outputText}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center'
    },
    title : {
        fontSize : 20,
        marginVertical : 20,
        fontFamily : 'ProximaNovaA-Bold'
    },
    inputContainer : {
        width : 300, 
        maxWidth : '80%',
        padding : 20
        
    },
    input : {
        width : 100
    },
    buttonContainer : {
        width :  '100%',
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    buttonView : {
        width : 100
    },
    outputBox : {
        alignItems : 'center',
        marginTop : 40
    },
    numberTitle : {
        fontSize : 20,
        fontFamily : 'ProximaNovaA-Light'
    },
    number : {
        fontSize : 40,
        fontWeight : 'bold',
        fontFamily : 'ProximaNovaA-Bold'
    },
    startGameButtonBox : {
        width : 200,
        marginTop : 20
    }
})