import React from 'react'
import {View , Text , StyleSheet, Dimensions , Linking } from 'react-native'
import { Button } from 'react-native-elements'


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function(props){
    return(
        <View style={styles.container}>
                <View>
                    <Text style={styles.title}> {props.data.name} </Text>
                    <Text style={styles.description}>Description :{'\n'}{props.data.description} </Text>
                    <Text style={styles.description}>Tools :{'\n'}{props.data.tools} </Text>
                </View>
                <View style={styles.buttonView}>
                    <Button 
                        title="View Project" 
                        titleStyle = {{ fontFamily : 'ProximaNovaA-Bold'}}
                        buttonStyle = {{ backgroundColor : "#081232" }}
                    />
                </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container : {
        width : screenWidth/1.3 ,
        alignSelf : 'center',
        padding: 20 ,
        marginTop : 20 ,
        marginBottom : 20,
        borderRadius : 25 ,
        backgroundColor : '#ffffff',
        elevation : 5
    },
    title : {
        color : '#081232',
        fontFamily : 'ProximaNovaA-Bold',
        fontSize : 17,
        textAlign : 'center',
        paddingTop : 10,
        paddingBottom : 10
    },
    description : {
        fontSize : 14 ,
        fontFamily :'ProximaNovaA-Light',
        paddingTop : 10,
        paddingBottom : 10
    },
    buttonView : {
        width : 150,
        alignSelf : 'center'
    }
})