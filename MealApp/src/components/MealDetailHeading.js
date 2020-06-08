import React from 'react'
import { View , Text , StyleSheet} from 'react-native'
import { Font , Color } from '../constants/customDesign'

export default function(props){
    return (
        <View style={styles.headingBox}>
            <Text style={{...styles.heading, ...props.style}}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headingBox : {
        backgroundColor  : Color.white,
        borderLeftWidth : 5 ,
        borderLeftColor : Color.yellow,
        marginVertical : 20,
        padding: 10,
        borderRadius : 20,
        borderTopLeftRadius : 0 ,
        borderBottomRightRadius : 0
      },
      heading : {
          fontFamily : Font.bold,
          color : Color.black ,
          fontSize : 12
      }
})