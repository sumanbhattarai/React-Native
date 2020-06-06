import React from 'react'
import { View , Text , StyleSheet , Button} from 'react-native'
import CardDesign from '../components/CardDesign'
import Colors from '../constants/colors'

export default function(props){
    return(
        <CardDesign style={styles.mainBox}>
            <Text style={styles.title}> Game is Over !</Text>
            <Text> Corrected in {props.value} guesses.</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Start Again"
                    onPress={props.startAgain}
                    color = {Colors.primary}
                />
            </View>
        </CardDesign>
    )
}

const styles = StyleSheet.create({
    mainBox : {
        padding : 20 ,
        width : 400 ,
        maxWidth : '80%',
        alignSelf : 'center',
        marginTop : 40
    },
    title : {
        fontSize : 20,
        fontWeight : 'bold',
        marginVertical : 20,
        fontFamily : 'ProximaNovaA-Light'
    },
    buttonContainer : {
        marginTop : 20 ,
        width : 200
    }
    
})