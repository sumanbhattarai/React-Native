import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class PortfolioScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={{color : '#eeeeee' }}>Portfolio Screen !!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        justifyContent : "center" ,
        alignItems : "center" ,
        backgroundColor : "#081232",
    }
})