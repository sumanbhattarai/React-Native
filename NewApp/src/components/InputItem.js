import React , { useState } from 'react'
import { View , TextInput , Button , StyleSheet , Modal}  from 'react-native'


export default function InputItem(props){
    const [ item , setItem] = useState('')

    const handleClick = () => {
        if(item !== ''){
          props.updateItem(item)
          setItem('')
        }
      }
    return(
      <Modal visible={props.visibility} animationType="slide">
          <View style={styles.firstBox}>
              <TextInput
                  placeholder = "Enter the item"
                  value={item}
                  onChangeText = {enteredItem => setItem(enteredItem)}
                  style={styles.inputField}
              />
              <View style={styles.buttonContainer}>
                  <Button
                      title="Add this item"
                      onPress={handleClick}
                  />
                  <Button
                      title="Cancel"
                      onPress={props.hideModal}
                      color = "red"
                  />
              </View>
          </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    firstBox : {
      flex:1 ,
      justifyContent : 'center',
      alignItems : 'center'
    },
    inputField : {
      borderBottomColor : 'black',
      borderBottomWidth : 1,
      width : '70%',
      textAlign : 'center',
      marginBottom : 20
    },
    buttonContainer : {
      flexDirection : 'row',
      justifyContent: 'space-around',
      width : '60%' 
    }
  })
