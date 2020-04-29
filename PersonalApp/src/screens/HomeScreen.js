import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Introduction from '../components/Introduction';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function About(){
    return(
        <Text>About Sec</Text>
    )
}

function Skill(){
    return(
        <Text>Skill Sec</Text>
    )
}

export default class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Introduction/>
                <Tab.Navigator   
                    tabBarOptions={{
                        labelStyle: { fontSize: 12 , color : '#081232' },
                        style: { backgroundColor: '#eeeeee' },
                        indicatorStyle : { backgroundColor :'#081232' }
                }}>
                    <Tab.Screen name="About" component={About} />
                    <Tab.Screen name="Education" component={Skill} />
                    <Tab.Screen name="Skill" component={Skill} />

                </Tab.Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor : "#081232",
    }
})