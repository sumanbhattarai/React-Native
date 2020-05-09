import React, { Component } from 'react'
import { View , ScrollView , Text , StyleSheet , Dimensions} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'


const screenWidth = Math.round(Dimensions.get('window').width);

export default class EducationTimeline extends Component {
    state={
      data : [
        { title : 'BE , Software Engineering' , time : '2017 - ' , description : 'Gandaki College of Engineering and Science'},
        { title : '+2 , Computer Science' , time : '2015 - 2016' , description : 'Prerana Science College'},
        { title : 'Grade 10 , SLC' , time : '2015' , description : 'Bhrikuti English Secondary School'},
        { title : 'Grade 8 , DLE' , time : '2013' , description : 'Bhrikuti English Secondary School'}
      ]
    }
    render() {
        return (
          <ScrollView style={{backgroundColor : '#ffffff'}}>
            <View style={styles.container}>
                <View style={{ marginTop : 20 }}>
                  {
                    this.state.data.map((el , index)=>{
                      return(
                        <View key={index}>
                          <Text style={styles.title}> <FontAwesomeIcon icon={faGraduationCap} size={ RFPercentage(2.5)} /> {el.title}</Text>
                          <Text style={styles.description}>{el.time}</Text>
                          <Text style={styles.description}>{el.description}{'\n'}</Text>
                        </View>
                      )
                    })
                  }
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems : 'center'
    },
    title : {
      fontFamily : 'ProximaNovaA-Bold',
      fontSize : RFPercentage(2)
    },
    description : {
      fontFamily : 'ProximaNovaA-Light',
      fontSize : RFPercentage(1.8)
    }
  });
