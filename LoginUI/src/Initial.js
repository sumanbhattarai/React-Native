import React from 'react'
import { View , Text , StyleSheet , Button , Image , Dimensions } from 'react-native'
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
               <Text style={styles.heading}>Stay Connected with everyone !</Text>
               <Text style={styles.caption}>Sign in with an account.</Text>
               <View style={styles.button}>
                   <Button
                        title="Get Started"
                        color="white"
                        onPress={()=>{
                            props.navigation.navigate('Login')
                        }}
                   />
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
        flex : 3,
        justifyContent : 'center' ,
        alignItems : 'center'
    },
    logo : {
        height : Dimensions.get('screen').height/5,
        width : Dimensions.get('screen').height/5 
    },
    footer : {
        flex : 2 ,
        backgroundColor : 'white',
        borderTopLeftRadius : 25 ,
        borderTopRightRadius : 25,
        padding : 20
    },
    heading : {
        fontSize : 30,
        fontWeight : 'bold',
        color : '#00887A'
    },
    caption : {
        marginTop : 5,
        fontSize : 15 ,
        fontWeight : '300' ,
        color : 'gray'
    },
    button : {
        height : 50 , 
        width : 200 ,
        backgroundColor : '#00887A',
        borderRadius : 25,
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'flex-end',
        marginTop : 30
    }
})
