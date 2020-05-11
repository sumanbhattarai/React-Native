import React from 'react' ;
import {View , Image} from 'react-native' ;
import { RFPercentage  } from 'react-native-responsive-fontsize';

export default function(props){
    return(
        <View style={{
            width : RFPercentage(12) ,
            height : RFPercentage(12) ,
            borderRadius : RFPercentage(12) ,
            borderWidth : 5,
            borderColor : '#192B4B',
            backgroundColor : '#ffffff' ,
            position : 'relative' ,
            overflow : 'hidden'
        }}>
            <Image style={{
                //  width : props.data === 'loadingScreen' ? '22%' :  '50%',
                //  height : props.data === 'loadingScreen' ? '30%' : '50%',
                width : '100%',
                height : '100%'
            }} source={require('../assets/images/sumancartoon.jpg')} />
        </View>
    )
}