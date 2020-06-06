import React from  'react'
import { View , Text , StyleSheet , Platform , StatusBar } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function CustomHeader(props){
    return(
        <View>
            { Platform.OS === 'ios' ? <View style={styles.statusbar}></View> : <StatusBar backgroundColor="blue" /> }
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statusbar : {
        width : '100%',
        height : getStatusBarHeight(),
        backgroundColor : 'blue'
    },
    header : {
        width : '100%',
        height : 70 ,
        justifyContent : "center" ,
        alignItems : 'center',
        backgroundColor : 'blue'
    },
    headerTitle : {
        color : 'white',
        fontSize : 20
    }
})