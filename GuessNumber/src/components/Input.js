import React from 'react'
import { TextInput , StyleSheet  } from 'react-native'

export default function(props){
    return(
        <TextInput {...props} style={{...styles.input , ...props.style}} />
    )
}

const styles = StyleSheet.create({
    input : {
        borderBottomColor : 'gray',
        borderBottomWidth : 1,
        marginVertical : 20,
        fontSize : 20 ,
        textAlign : 'center'
    }
})