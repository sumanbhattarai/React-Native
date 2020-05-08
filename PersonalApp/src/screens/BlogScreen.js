import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize'

export default class BlogScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.firstBox}>
                    <Text style={{ fontFamily : 'ProximaNovaA-Bold' , color : '#eeeeee' , fontSize : RFPercentage(5)}}>Blog Posts !!</Text>
                </View>
                <View style={styles.secondBox}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection : 'column',
        backgroundColor : "#081232",
    },
    firstBox : {
        flex :2 ,
        backgroundColor  :'red' ,
        justifyContent : 'center',
        alignItems : 'center' , 
        backgroundColor : "#081232", 
    },
    secondBox : {
        flex : 4 ,
        backgroundColor  :'#eeeeee'
    }
})