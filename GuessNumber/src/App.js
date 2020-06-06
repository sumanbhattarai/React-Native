import React from 'react'
import { View  , SafeAreaView , StyleSheet  } from 'react-native'
import CustomHeader from './components/CustomHeader'

export default function App (){
  return(
    <View style={styles.screen}>
        <CustomHeader title="Guess a Number" />
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex : 1
  }
})