import React from 'react' ;
import {View  , Text} from 'react-native' ;
import SplashScreen from './components/SplashScreen' ;
import Home from './Home' ;

export default class App extends React.Component{
    state = {
        isLoading : true
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading :  false
            })
        } , 3000)
    }

    render(){
        return this.state.isLoading  ? <SplashScreen/> : <Home/>
    }
}