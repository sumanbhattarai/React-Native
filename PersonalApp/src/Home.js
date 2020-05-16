import * as React from 'react'
import { Text, View  , StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome , faSuitcase , faEnvelope , faEdit } from '@fortawesome/free-solid-svg-icons'
import HomeScreen from './screens/HomeScreen' 
import PortfolioScreen from './screens/PortfolioScreen'
import BlogScreen from './screens/BlogScreen'
import ContactScreen from './screens/ContactScreen'
import { RFPercentage } from 'react-native-responsive-fontsize'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#4191FB"
      barStyle={{ backgroundColor : '#202947' , height : '8%' , justifyContent :'center'}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: <Text style={{fontSize : RFPercentage(1.4) , fontFamily : 'ProximaNovaA-Bold' , fontWeight : 'bold'}}>HOME</Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={ faHome } color={ color } size = { RFPercentage(2.5) } />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarLabel: <Text style={{fontSize : RFPercentage(1.4) , fontFamily : 'ProximaNovaA-Bold' , fontWeight : 'bold'}}> PORTFOLIO </Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={ faSuitcase } color={ color } size = { RFPercentage(2.3)} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          tabBarLabel: <Text style={{fontSize : RFPercentage(1.4) , fontFamily : 'ProximaNovaA-Bold' , fontWeight : 'bold'}}> BLOG </Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faEdit} color = {color } size = { RFPercentage(2.5)} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: <Text style={{fontSize : RFPercentage(1.4) , fontFamily : 'ProximaNovaA-Bold' , fontWeight : 'bold'}}> CONTACT </Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faEnvelope} color = {color } size = { RFPercentage(2.5)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#081232" barStyle="light-content" />
      <MyTabs />
    </NavigationContainer>
  );
}
