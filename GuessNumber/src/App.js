import React , {useState } from 'react'
import { View  , SafeAreaView , StyleSheet  } from 'react-native'
import CustomHeader from './components/CustomHeader'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App (){
  const [ userNumber , setUserNumber] = useState()

  const handleGame = (choosenNumber)=> {
    setUserNumber(choosenNumber)
  }

  let outputScreen =   <StartGameScreen startGame={handleGame}/>
  if(userNumber) {
      outputScreen = <GameScreen />
  }

  return(
    <View style={styles.screen}>
        <CustomHeader title="Guess a Number" />
        {outputScreen}
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex : 1
  }
})