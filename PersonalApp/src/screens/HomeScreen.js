import React from 'react'
import { View, ScrollView, Text, StyleSheet} from 'react-native'
import Introduction from '../components/Introduction'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import About from '../components/About'
import EducationTimeline from '../components/EducationTimeline'
import SocialLinks from '../components/SocialLinks'
import { RFPercentage } from "react-native-responsive-fontsize" 


const Tab = createMaterialTopTabNavigator();

export default class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Introduction/>
                <Tab.Navigator   
                    tabBarOptions={{
                        labelStyle: { fontSize: RFPercentage(1.8) , color : '#081232' , fontFamily : 'ProximaNovaA-Bold' },
                        style: { backgroundColor: '#eeeeee' },
                        indicatorStyle : { backgroundColor :'#081232' }
                }}>
                    <Tab.Screen name="About" component={About} />
                    <Tab.Screen name="Education" component={EducationTimeline} />
                    <Tab.Screen name="Social Links" component={SocialLinks} />

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