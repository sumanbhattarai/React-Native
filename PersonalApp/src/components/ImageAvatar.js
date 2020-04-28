import React from 'react' ;
import {View , Image} from 'react-native' ;

export default function(){
    return(
        <View style={{
            width : 100 ,
            height : 100 ,
            borderRadius : 100,
            borderWidth : 5,
            borderColor : '#192B4B',
            backgroundColor : '#ffffff' ,
            position : 'relative' ,
            overflow : 'hidden'
        }}>
            <Image style={{
                 width : '100%',
                 height : '100%'
            }} source={require('../assets/images/sumancartoon.jpg')} />
        </View>
    )
}