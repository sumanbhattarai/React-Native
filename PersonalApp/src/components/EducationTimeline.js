import React, { Component } from 'react'
import { View , Text , StyleSheet , Dimensions} from 'react-native'
import Timeline from 'react-native-timeline-flatlist';


const screenWidth = Math.round(Dimensions.get('window').width);

export default class EducationTimeline extends Component {
    state = {
        data : [
            {
                
                title: 'Software Engineering',
                description:
                  '2017- \nGandaki College of Engineering and Science',
              },
              { 
                
                title: 'Computer Science',
                description:
                  '2015-2016\nPrerana Science College',
              },
              {
                
                title: 'SLC',
                description:
                  '2015\nBhrikuti English Secondary School',
              },
              {
                  title : 'DLE',
                  description : 
                    '2013\nBhrikuti English Secondary School'
              }
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                 <Timeline 
                    style={{ flex: 1 , marginTop : screenWidth > 330 ? 60 : 20}} 
                    lineColor = "#eeeeee"
                    circleColor = "#081232"
                    titleStyle={{color : "#081232" , fontFamily : 'ProximaNovaA-Light'}}
                    descriptionStyle={{color : "#081232" , fontFamily : 'ProximaNovaA-Light'}}
                    data={this.state.data} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });
