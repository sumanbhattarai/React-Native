import React from 'react'
import { View , Text , Button , StyleSheet, TextInput } from 'react-native'
import CardDesign from '../components/CardDesign'

export default function StartGameScreen(){
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game !</Text>
            <CardDesign style={styles.inputContainer}>
                <Text>Select a Number.</Text>
                <TextInput placeholder="Enter a Number" />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" />
                    <Button title="Confirm" />
                </View>
            </CardDesign>
        </View>
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
    buttonContainer : {
        width :  '100%',
        flexDirection : 'row',
        justifyContent : 'space-around'
    }
})