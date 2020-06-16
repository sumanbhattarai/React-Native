import React from 'react'
import { View , Text , StyleSheet , Button , Image , Dimensions , TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function(props){
    return (
       <View style={styles.container}>
           <View style={styles.header}>
                    <Animatable.Image 
                        animation="fadeInDownBig"
                        duration={1500}
                        source={require('./assets/sumanlogo.png')} 
                        style={styles.logo}
                    />
           </View>
           <Animatable.View animation="fadeInUpBig" delay={1000} style={styles.footer}>
               <View style={styles.form}>
                    <Text style={styles.caption}>Email : </Text>
                    <TextInput 
                        placeholder = "Email"
                        style={styles.input}
                    />
                    <Text style={styles.caption}>Password : </Text>
                    <TextInput 
                        placeholder = "Password"
                        style={styles.input}
                    />
                    <View style={styles.button}>
                        <Button
                            title="Login"
                            color="white"
                        />
                    </View>
                    <Text style={styles.dontHave}> Don't have an account ? </Text>
                    <View style={styles.button}>
                        <Button
                            title="Create an account"
                            color="white"
                        />
                    </View>
               </View>
              
           </Animatable.View>

       </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex :1 , 
        backgroundColor : '#00887A'
    },
    header : {
        flex : 2,
        justifyContent : 'center' ,
        alignItems : 'center'
    },
    logo : {
        height : Dimensions.get('screen').height/5,
        width : Dimensions.get('screen').height/5 
    },
    footer : {
        flex : 3 ,
        backgroundColor : 'white',
        borderTopLeftRadius : 25 ,
        borderTopRightRadius : 25,
        padding : 20
    },
    form : {
        width : '80%',
        alignSelf : 'center'
    },
    input : {
        borderBottomWidth : 0.5,
        borderBottomColor : 'gray',
        paddingVertical : 5 ,
        fontSize : 15
    },
    caption : {
        marginTop : 20,
        marginBottom : 10,
        fontSize : 20 ,
        fontWeight : '300' ,
        color : 'gray'
    },
    button : {
        height : 50 , 
        backgroundColor : '#00887A',
        borderRadius : 25,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 30
    },
    dontHave : {
        color : 'gray' ,
        textAlign : 'center',
        marginTop : 20
    }
})
