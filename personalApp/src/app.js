import React from 'react' ;
import {View  , Text} from 'react-native' ;
import SplashScreen from './components/SplashScreen' ;

//ProximaNovaA-Bold.otf
export default class App extends React.Component{
    state = {
        isLoading : true
    }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({
    //             isLoading :  false
    //         })
    //     } , 3000)
    // }

    render(){
        return this.state.isLoading  ? <SplashScreen/> :
        <View style={{flex : 1  , justifyContent : "center"}}>
            <Text style={{textAlign : 'center'}}>Hello World</Text>
        </View>
    }
}