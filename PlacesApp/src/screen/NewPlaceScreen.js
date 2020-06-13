import React , {useState} from 'react'
import { View , Text , ScrollView , TextInput , StyleSheet, Button , Image } from 'react-native'
import {  Color } from "../constants/constants"
import { useDispatch } from 'react-redux'
import  {addPlace} from '../store/action/places'
import ImagePicker from 'react-native-image-picker';

export default function(props){
    const [ title , setTitle] = useState('')
    const [ address , setAddress] = useState('')
    const [ imageSrc , setImageSrc] = useState('')
    const dispatch = useDispatch()

    const handleSave = ()=> {
        dispatch(addPlace(title , address , imageSrc))
        props.navigation.goBack()
    }

    const handleSelectImage = ()=>{
        ImagePicker.showImagePicker((response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker')
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton)
            } else {
                setImageSrc(response.uri)
          }
        })
    }

    const image = (
        imageSrc !== '' ?
            <Image source={{ uri : imageSrc}} style={styles.image} />
        : null
    )
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Title : </Text>
            <TextInput 
                style={styles.input}
                value={title}
                onChangeText={ value => setTitle(value)}
                placeholder="Enter title"
            />
            <Text style={styles.label}>Address : </Text>
            <TextInput 
                style={styles.input}
                value={address}
                onChangeText={ value => setAddress(value)}
                placeholder="Enter address"
            />
            <Text style={styles.label}> Upload an Image : </Text>
            {image}
            <View style={styles.button}>
                <Button
                    title="Select an Image"
                    onPress={handleSelectImage}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Save"
                    onPress={handleSave} 
                />
            </View>
        </ScrollView>
    )
}

const styles  = StyleSheet.create({
    container : {
        margin : 20
    },
    label : {
        color : Color.primary,
        marginVertical : 5
    },
    input : {
        width : '100%' ,
        padding : 10 ,
        borderColor : Color.primary ,
        borderWidth : 1
    },
    image : {
        width : '100%' ,
        height : 200
    },
    button : {
        marginVertical : 5
    }
})