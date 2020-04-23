import React from 'react' ;
import {View , Text , StyleSheet , Image , ActivityIndicator} from 'react-native' ;

export default class SplashScreen extends React.Component{
    render(){
        return(
            <View style={ styles.mainBox}>
                <View></View>
                <View>
                    <View style={styles.imageBox}>
                        <Image style={styles.myImage} source={require('../assets/images/me.png')} />
                    </View>
                    <View style={{marginTop : 20}}>
                        <ActivityIndicator size="small" color="#EEEEEE" />
                        <Text style={styles.loadingText}>Please wait ...</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.footer}>
                        Suman Bhattarai &copy; {new Date().getFullYear()}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainBox : { 
      flex : 1 , 
      flexDirection:'column' , 
      justifyContent : 'space-between'  , 
      alignItems : 'center' , 
      backgroundColor : '#5480A4'
    },
    imageBox: {
        width : 100 ,
        height : 100 ,
        borderRadius : 100,
        borderWidth : 5,
        borderColor : '#3B5B7E',
        backgroundColor : '#ffffff' ,
        position : 'relative' ,
        overflow : 'hidden'
    },
    myImage : {
        width : '100%' ,
        height : '100%' ,
        
    },
    loadingText : {
      color :  '#EEEEEE' ,
      textAlign : 'center' ,
      fontWeight : 'bold' ,
      paddingTop : 20
    },
    footer : {
      color : '#EEEEEE' , 
      fontWeight : 'bold',
      paddingBottom : 30
    }
  });