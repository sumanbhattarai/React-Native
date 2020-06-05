import React from 'react'
import { View , Text , StyleSheet ,TouchableOpacity } from 'react-native'

export default function DisplayItem(props){
    return(
        <TouchableOpacity activeOpacity={0.8} onLongPress={props.deleteItem}>
            <View style={styles.itemDisplayed}>
                <Text style={{color : 'white'}}>{props.data}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    itemDisplayed : {
        marginHorizontal : 40,
        marginTop : 20,
        height : 40 ,
        justifyContent : 'center',
        alignItems : 'center' ,
        backgroundColor : '#707070'
    }
})