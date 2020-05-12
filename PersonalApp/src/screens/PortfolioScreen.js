import React from 'react'
import { SafeAreaView , View , ScrollView , Dimensions , Text, StyleSheet} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import All from '../components/portfolio/All' 
import Web from '../components/portfolio/Web'
import App from '../components/portfolio/App'
import { RFPercentage } from 'react-native-responsive-fontsize'

const Tab = createMaterialTopTabNavigator();

const height = Math.round(Dimensions.get('window').height);


export default class HomeScreen extends React.Component {
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={{marginTop : height/22 , paddingBottom : 20}}>
                    <Text style={{ fontFamily : 'ProximaNovaA-Bold' , color : '#eeeeee' , fontSize : RFPercentage(2) , textAlign : 'center'}}> Your Portfolio is your wealth. </Text>
                </View>
                <Tab.Navigator   
                    tabBarOptions={{
                        activeTintColor : '#4191FB' ,
                        inactiveTintColor : '#eeeeee' ,
                        labelStyle: { fontSize: RFPercentage(1.5) , fontFamily : 'ProximaNovaA-Bold' },
                        style: { backgroundColor: '#081232' },
                        indicatorStyle : { backgroundColor :'#4191FB' }
                }}>
                    <Tab.Screen name="All" component={All} />
                    <Tab.Screen name="Web" component={Web} />
                    <Tab.Screen name="App" component={App} />

                </Tab.Navigator>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor : "#081232",
    }
})