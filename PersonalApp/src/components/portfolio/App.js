import React, { Component } from 'react'
import {View , Text , StyleSheet} from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    fontFamily : 'ProximaNovaA-Light',
                    fontSize : 16,
                    padding : 60,
                    color : "#081232"
                }}> 
                    No any app projects done till date except this personal app. Hope to fill this section with many projects on coming days.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor : '#eeeeee'
    }
})

