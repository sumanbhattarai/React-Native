import React from 'react'
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextInput , KeyboardAvoidingView} from 'react-native'
import {Button} from 'react-native-elements'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default class ContactScreen extends React.Component {
    state = {
        inputs : [
            {
                name : 'Full Name',
                value : '' ,
                multiline : false,
                error : false,
                errorMesage  :''
            },
            {
                name : 'Email',
                value : '',
                multiline : false,
                error : false,
                errorMesage : ''
            },
            {
                name : 'Message',
                value : '',
                multiline :  true,
                error : false,
                errorMesage : ''
            }
        ]
    }

    // handleChange = (e , index)=> {
    //     const inputs = [...this.state.inputs] 
    //     console.log(e.target.name)

    // }

    handleChange = (newText , index) => {
        console.log( newText , index)
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.firstBox}>
                    <Text style={{ fontFamily : 'ProximaNovaA-Bold' , color : '#eeeeee' , fontSize : RFPercentage(2)}}>Contact me for any queries.</Text>
                </View>
                <ScrollView>
                <View style={styles.secondBox}>
                    <View style={{marginTop  : 30 , width : '80%'}}>
                        {
                            this.state.inputs.map((el , index)=>{
                                return(
                                    <View key={index}>
                                        <Text style={styles.name}>{el.name}{'\n'}</Text> 
                                        <TextInput style={[styles.input , {height : el.multiline ? RFPercentage(15) : RFPercentage(7)}]} multiline={el.multiline} placeholder={el.name} onChangeText={(index)=>this.handleChange} />
                                        <Text style={styles.error}>{el.errorMesage}</Text>
                                    </View>
                                )
                            })
                        }
                        <View style={{ alignSelf : 'center' , width : '60%' , marginTop : 20}}>
                            <Button 
                                title="Send Message" 
                                titleStyle = {{ fontFamily : 'ProximaNovaA-Bold' , fontSize : RFPercentage(1.8) , textAlign : 'center'}}
                                buttonStyle = {{ backgroundColor : "#081232" , height : RFPercentage(7) }} 
                            />
                        </View>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection : 'column',
        backgroundColor : "#081232",
    },
    firstBox : {
        aspectRatio: 5/1,
        backgroundColor  :'red' ,
        justifyContent : 'center',
        alignItems : 'center' , 
        backgroundColor : "#081232", 
    },
    secondBox : {
        // flex : 5 ,
        backgroundColor  :'#eeeeee',
        alignItems : 'center',
        paddingBottom : 50 , 
        borderWidth : 5 ,
        borderColor : '#202947',
        borderRadius : 25,
        width : '90%',
        alignSelf : 'center'
    },
    name : {
        fontFamily : 'ProximaNovaA-Bold',
        fontSize : RFPercentage(1.8),
        color : '#081232'
    },
    input : {
        borderWidth : 1 ,
        borderColor : '#707070',
        width : '100%' ,
        borderRadius : 25 ,
        fontFamily : 'ProximaNovaA-Light',
        fontSize : RFPercentage(1.7) ,
        textAlign : 'center',
        paddingRight : 10,
        paddingLeft : 10,
        color : '#081232'
    },
    error : {
        fontFamily : 'ProximaNovaA-Light',
        fontSize : RFPercentage(1.3),
        color : 'red'
    }
})