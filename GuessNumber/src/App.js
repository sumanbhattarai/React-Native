import React from 'react'
import { View  , SafeAreaView , StyleSheet  } from 'react-native'
import CustomHeader from './components/CustomHeader'
import StartGameScreen from './screens/StartGameScreen'

export default function App (){
  return(
    <View style={styles.screen}>
        <CustomHeader title="Guess a Number" />
        <StartGameScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex : 1
  }
})