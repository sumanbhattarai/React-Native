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

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      barStyle={{ backgroundColor : '#202947'}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="home" color={color} size={26} />
            <FontAwesomeIcon icon={ faHome } color={ color } style={{fontSize : 50}} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={ faSuitcase } color={ color } style={{fontSize : 50}} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faEdit} color = {color } style={{fontSize : 50}} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faEnvelope} color = {color } style={{fontSize : 50}} />
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
