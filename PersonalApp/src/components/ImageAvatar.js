import React from 'react' ;
import {View , Image} from 'react-native' ;

export default function(props){
    return(
        // <View style={{
        //     width : 100 ,
        //     height : 100 ,
        //     borderRadius : 100,
        //     borderWidth : 5,
        //     borderColor : '#192B4B',
        //     backgroundColor : '#ffffff' ,
        //     position : 'relative' ,
        //     overflow : 'hidden'
        // }}>
            <Image style={{
                 width : props.data === 'loadingScreen' ? '22%' :  '50%',
                 height : props.data === 'loadingScreen' ? '30%' : '50%',
            }} source={require('../assets/images/newone.png')} />
        // </View>
    )
}