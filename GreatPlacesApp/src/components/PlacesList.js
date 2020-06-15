import React from 'react'
import {  View , Text , StyleSheet , Image , TouchableOpacity } from 'react-native'
import { Color } from '../constants/constants'

export default function(props){
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={props.onClick}
        >
            <Image style={styles.image} source={{ uri : 'file://' + props.data.src}} />
            <View style={styles.info}>
                <Text style={styles.title}>{props.data.title}</Text>
                <Text style={styles.address}>{props.data.address}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        margin : 20,
        flexDirection : 'row',
        borderBottomWidth : 1,
        borderBottomColor : Color.gray,
        padding : 5
        // borderWidth : 1 ,
        // borderColor : 'red'
    },
    image : {
        width : 70 ,
        height : 70,
        borderRadius : 35,
        // borderWidth : 1 , 
        // borderColor : 'blue'
    },
    info : {
        // borderWidth : 1 ,
        // borderColor : 'red',
        padding : 20 ,
        justifyContent : 'center',
        flex : 1
    },
    title : {
        fontSize : 15 ,
        fontWeight : 'bold',
        color : Color.black ,
    },
    address : {
        fontSize : 12 ,
        color : Color.gray
    }
})

