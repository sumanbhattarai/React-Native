import React , {useState} from 'react'
import { View , Text , ScrollView , TextInput , StyleSheet, Button } from 'react-native'
import {  Color } from "../constants/constants";
import { useDispatch } from 'react-redux'
import  {addPlace} from '../store/action/places'

export default function(props){
    const [ title , setTitle] = useState('')
    const dispatch = useDispatch()

    const handleSave = ()=> {
        dispatch(addPlace(title))
        props.navigation.goBack()
    }
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Title : </Text>
            <TextInput 
                style={styles.input}
                value={title}
                onChangeText={ value => setTitle(value)}
                placeholder="Enter title"
            />
            <Button
                title="Save"
                onPress={handleSave} 
            />
        </ScrollView>
    )
}

const styles  = StyleSheet.create({
    container : {
        margin : 20
    },
    label : {
        color : Color.primary,
        marginBottom : 5
    },
    input : {
        width : '100%' ,
        padding : 10 ,
        borderColor : Color.primary ,
        borderWidth : 1
    }
})