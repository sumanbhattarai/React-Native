import React  , { useState } from 'react'
import { View , Text , Button , StyleSheet, TouchableWithoutFeedback , Keyboard  } from 'react-native'
import CardDesign from '../components/CardDesign'
import Colors from '../constants/colors'
import Input from '../components/Input'

export default function StartGameScreen(){
    const [enteredValue , setEnteredValue ] = useState('')

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
                            <Button title="Reset" color={Colors.danger}/>
                        </View>
                        <View style={styles.buttonView}>
                            <Button title="Confirm" color={Colors.success} />
                        </View>
                    </View>
                </CardDesign>
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
        marginVertical : 20
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
    }
})