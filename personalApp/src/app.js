import React from 'react' ;
import {View  , Text} from 'react-native' ;
import SplashScreen from './components/SplashScreen' ;

export default class App extends React.Component{
    render(){
        return(
            <SplashScreen />
            // <View>
            //     <Text>Hello World</Text>
            // </View>
        );
    }
}