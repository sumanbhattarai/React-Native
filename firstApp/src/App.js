import React from 'react' ;
import { StyleSheet , Text  , View} from 'react-native' ;
import SplashScreen from './components/SplashScreen' ;
import TabBar from "@mindinventory/react-native-tab-bar-interaction";

export default class App extends React.Component{
  state={
    isLoading : true
  }

  componentDidMount(){
    setTimeout(()=>{
        this.setState({
          isLoading : !this.state.isLoading
        })
    }, 3000)
  }

  render(){
    if(this.state.isLoading){
      return <SplashScreen />
    } else {
      return(
        <TabBar>
            <TabBar.Item
                icon={require('./assets/images/me.png')}
                selectedIcon={require('./assets/images/me.png')}
                title="Tab1"
                screenBackgroundColor={{ backgroundColor: '#008080' }}
            >
              <View>
                  <Text>Tab1 Content</Text>
              </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./assets/images/me.png')}
                selectedIcon={require('./assets/images/me.png')}
                title="Tab2"
                screenBackgroundColor={{ backgroundColor: '#F08080' }}
            >
                <View>
                  <Text>Tab2 Content</Text>
                </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./assets/images/me.png')}
                selectedIcon={require('./assets/images/me.png')}
                title="Tab3"
                screenBackgroundColor={{ backgroundColor: '#485d72' }}
            >
              <View>
                <Text>Tab3 Content</Text>
              </View>
            </TabBar.Item>
          </TabBar>
      );
    }
  }
}

