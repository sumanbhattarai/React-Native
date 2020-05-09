import React from 'react'
import {View , Text , StyleSheet, Dimensions , Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { RFPercentage } from 'react-native-responsive-fontsize'


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function(props){
    return(
        <View style={styles.container}>
                <View>
                    <Text style={styles.title}> {props.data.title} </Text>
                    <Text style={styles.description}>Tags :{'\n'}{props.data.tags} </Text>
                    <Text style={styles.description}>Descripton:{'\n'}{props.data.description} </Text>
                    { 
                      props.data.show ? 
                      props.data.points.map((el , index)=>{
                        return <Text key={index} style={styles.description}>{el.point}</Text> 
                      })
                      : null 
                    }
                </View>
                <View style={styles.buttonView}>
                    <Button 
                        title={ props.data.show ? 'Hide Details' : 'Read All'}
                        titleStyle = {{ fontFamily : 'ProximaNovaA-Bold' , fontSize : RFPercentage(1.5)}}
                        buttonStyle = {{ backgroundColor : "#081232" }}
                        onPress={props.toggleView}
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
        fontSize : RFPercentage(2),
        textAlign : 'center',
        paddingTop : 10,
        paddingBottom : 10
    },
    description : {
        fontSize : RFPercentage(1.8) ,
        fontFamily :'ProximaNovaA-Light',
        paddingTop : 10,
        paddingBottom : 10
    },
    buttonView : {
        width : 130,
        alignSelf : 'center'
    }
})