import React , {useState } from 'react'
import { View  , SafeAreaView , StyleSheet  } from 'react-native'
import CustomHeader from './components/CustomHeader'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App (){
  const [ userNumber , setUserNumber] = useState(0)
  const [ isFinish , setFinish ] = useState(false)
  const [ numberOfGuess , setNumberOfGuess] = useState(0)

  const handleGame = selectedNumber => {
    setUserNumber(selectedNumber)
    setFinish(false)
  }

  const handleGameOver =round=> {
    setFinish(true)
    setNumberOfGuess(round)
  }

  const reset = ()=> {
    setUserNumber(0)
    setFinish(false)
    setNumberOfGuess(0)
  }

  let outputScreen =   <StartGameScreen startGame={handleGame}/>
  if(userNumber !==0 && !isFinish) {
      outputScreen = <GameScreen gameOver={handleGameOver} userChoice={userNumber} />
  } else if(isFinish) {
      outputScreen = <GameOverScreen value={numberOfGuess} startAgain={reset} />
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
    flex : 1,
  }
})