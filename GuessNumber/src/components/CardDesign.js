import React from 'react'
import {View , StyleSheet} from 'react-native'

export default function CardDesign(props){
    return(
        <View style={{...styles.card , ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        alignItems  :'center',
        shadowColor : 'black',
        shadowOffset : {
            width : 0 ,
            height : 2
        },
        shadowOpacity : 0.26,
        shadowRadius : 6,
        elevation : 8,
        backgroundColor : '#F0F0F0',
        borderRadius : 10
    }
})