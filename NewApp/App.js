import React , { useState } from 'react' 
import { SafeAreaView , View , Text , Button , TextInput  , StyleSheet, FlatList} from 'react-native'
import DisplayItem from './src/components/DisplayItem'
import InputItem from './src/components/InputItem'

export default function App (){
  const [ itemsArray , setItemsArray] = useState([])
  const [ isVisible , setVisible] = useState(false)

  const handleUpdate = item =>{
    setItemsArray(itemsArray => [...itemsArray , { key : new Date().getTime().toString() , value : item}])
    setVisible(false)
  }

  const handleDelete = itemKey =>{
    setItemsArray(itemsArray=>{
      return itemsArray.filter(items=> items.key !== itemKey)
    })
  }
    return(
      <SafeAreaView style={{marginTop : 20}}>
        <View style={styles.firstBox}>
          <Button
            title="Add new Item"
            onPress={()=>setVisible(true)}
          />
        </View>
        <InputItem 
          updateItem={handleUpdate}
          visibility={isVisible}
          hideModal={()=>setVisible(false)}
        />
        <FlatList
          data={itemsArray}
          renderItem={itemData =>(
              <DisplayItem 
                  data={itemData.item.value} 
                  deleteItem={()=>handleDelete(itemData.item.key)} 
              />
          )}
        />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  firstBox : {
    width : '50%',
    alignSelf : 'center'
  }
})

