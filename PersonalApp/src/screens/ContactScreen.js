import React from 'react'
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextInput , ActivityIndicator} from 'react-native'
import {Button} from 'react-native-elements'
import { RFPercentage } from 'react-native-responsive-fontsize'
import database from '@react-native-firebase/database';

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
        ],
        isLoading : true,
        buttonName : 'Send Message',
        error : false
    }

    handleChange = (index , newText) => {
        const inputs = [...this.state.inputs]
        inputs[index].value = newText
        this.setState({
            input : inputs
        })
    }

    buttonClick = ()=> {
        this.setState({
            buttonName : 'Send Message'
        })
        const valid = this.validateData()
        if(valid){
            this.setState({
                buttonName : 'Sending...'
            })

            database()
            .ref('/UsersMessage/')
            .push({
                name: this.state.inputs[0].value,
                email : this.state.inputs[1].value ,
                message : this.state.inputs[2].value
            })
            .then(()=>{
                this.setState({
                    buttonName : 'Message Sent ! 😇 '  
                })
                this.resetInputs()
            })
            .catch(error =>{
                this.setState({
                    buttonName : 'Failed ! 😞' ,  
                    error :  true
                })
            })
        }
    }

    resetInputs = ()=> {
        const inputs = [...this.state.inputs]
        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
        this.setState({
            inputs : inputs
        })
        console.log('done')

    }

    validateData = ()=> {
        const fullName = this.state.inputs[0].value
        const email = this.state.inputs[1].value
        const message = this.state.inputs[2].value

        if(fullName === ''){
            const inputs = [...this.state.inputs]
            inputs[0].error = true
            inputs[0].errorMesage = '* Full Name can\'t be blank.'
            this.setState({
                inputs : inputs
            })
            return false ;
        } else if ( !(/^[a-zA-Z]+[ ]+[a-zA-Z ]+$/.test(fullName))){
            const inputs = [...this.state.inputs]
            inputs[0].error = true
            inputs[0].errorMesage = '* Invalid Full Name'
            this.setState({
                inputs : inputs
            })
            return false
        } else {
            const inputs = [...this.state.inputs]
            inputs[0].error = false
            inputs[0].errorMesage = ''
            this.setState({
                inputs : inputs
            })
        }

        if(email === ''){
            const inputs = [...this.state.inputs]
            inputs[1].error = true
            inputs[1].errorMesage = '* Email can\'t be blank.'
            this.setState({
                inputs : inputs
            })
            return false ;
        } else if ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            const inputs = [...this.state.inputs]
            inputs[1].error = true
            inputs[1].errorMesage = '* Invalid Email format.'
            this.setState({
                inputs : inputs
            })
            return false
        } else {
            const inputs = [...this.state.inputs]
            inputs[1].error = false
            inputs[1].errorMesage = ''
            this.setState({
                inputs : inputs
            })
        }

        function countWords(str){
            str = str.replace(/(^\s*)|(\s*$)/gi,"");
            str = str.replace(/[ ]{2,}/gi," ");
            str = str.replace(/\n /,"\n");
            return str.split(' ').length;
        }
        if(countWords(message) < 3 ){
            const inputs = [...this.state.inputs]
            inputs[2].error = true
            inputs[2].errorMesage = '* Message must have at least 3 words.'
            this.setState({
                inputs : inputs
            })
            return false
        } else {
            const inputs = [...this.state.inputs]
            inputs[2].error = false
            inputs[2].errorMesage = ''
            this.setState({
                inputs : inputs
            })
        }
        return true
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
                                        <Text style={styles.name}>{'\n'}{el.name}{'\n'}</Text> 
                                        <TextInput 
                                            style={[styles.input , {height : el.multiline ? RFPercentage(15) : RFPercentage(7)}]} 
                                            multiline={el.multiline} placeholder={el.name} 
                                            onChangeText={(newText)=>this.handleChange(index , newText)}
                                            value={this.state.inputs[index].value} 
                                        />
                                        {
                                            el.error ? <Text style={styles.error}>{el.errorMesage}</Text> : null
                                        }
                                    </View>
                                )
                            })
                        }
                        <View style={{ alignSelf : 'center' , width : '60%' , marginTop : 20}}>
                            <Button 
                                title= { this.state.buttonName } 
                                titleStyle = {{ fontFamily : 'ProximaNovaA-Bold' , fontSize : RFPercentage(1.8) , textAlign : 'center'}}
                                buttonStyle = {{ backgroundColor : '#081232' , height : RFPercentage(7) }}
                                onPress = {this.buttonClick} 
                            />
                        </View>
                        {
                            this.state.error ? <Text style={[styles.error , {fontSize : RFPercentage(2) , marginTop : 10}]}>* Something went wrong ! Try again later. </Text> : null
                        }
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
        alignSelf : 'center' ,
        marginBottom : 20
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
        fontFamily : 'ProximaNovaA-Bold',
        fontSize : RFPercentage(1.3),
        color : '#F02849',
        textAlign : 'center',
        marginTop : 5 
    }
})