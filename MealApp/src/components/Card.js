import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity } from 'react-native'
import {Color , Font} from '../constants/customDesign'

export default function (props){
    return(
        <TouchableOpacity activeOpacity={0.6} 
            style={styles.categoryBox}
            onPress={props.onClick}
            style={{...styles.categoryBox , backgroundColor : props.data.color}}
        >
            <View>
                <Text style={styles.title}>{props.data.title}</Text>
            </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryBox: {
        flex : 1,
        height : 200,
        backgroundColor : Color.white,
        margin : 20 ,
        borderRadius : 40,
        justifyContent : 'center' ,
        alignItems : 'center',
        shadowColor : Color.black,
        shadowOffset : {
            width : 0 ,
            height : 2
        },
        shadowOpacity : 0.26,
        shadowRadius : 6,
        elevation : 8,
      },
      title : {
          fontFamily : Font.bold,
          color : Color.black
      }
})