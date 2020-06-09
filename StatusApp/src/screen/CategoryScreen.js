import React from 'react'
import {View , Text, Button} from 'react-native'

export default function(props){
    return(
        <View>
            <Text>Category Screen</Text>
            <Button 
                title="Click me"
                onPress={()=>{
                    props.navigation.navigate('Status')
                }}
            />
        </View>
    )
}