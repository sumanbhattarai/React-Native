import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Introduction from '../components/Introduction';

export default class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Introduction/>
            </View>
        );å
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor : "#081232",
    }
})