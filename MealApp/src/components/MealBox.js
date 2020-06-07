import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity  , Image, ColorPropType} from 'react-native'
import { Color , Font} from '../constants/customDesign'

export default function (props){
    return(
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>props.onClick(props.data.id)}
        >
            <View style={styles.container}>
                <Image source={{uri : props.data.imageUrl }} style={{height : 180 , width : '100%'}} />
                <View style={styles.infoBox}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>{props.data.title}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>Duration : (min) {'\n'} {props.data.duration} </Text>
                        <Text style={styles.infoText}>Complexity : {'\n'} {props.data.complexity}</Text>
                        <Text style={styles.infoText}>Affordability : {'\n'} {props.data.affordability} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container : {
        margin : 20 ,
        height : 250
    },
    infoBox : {
        height : 70,
        backgroundColor : Color.primary ,
        flex : 1
    },
    titleBox : {
        flex : 1 , 
        justifyContent :'center'
    },
    title : {
        textAlign : 'center' ,
        fontFamily : Font.bold ,
        color :  Color.white ,
        fontSize : 15
    },
    info : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        flex : 1 ,
        backgroundColor : '#707070' ,
        alignItems : 'center'
    },
    infoText: {
        fontSize : 10,
        fontFamily : Font.bold,
        color : Color.white
    }
})