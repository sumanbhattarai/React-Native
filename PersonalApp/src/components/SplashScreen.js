import React from 'react' ;
import {View , Text , StyleSheet , Image , ActivityIndicator , StatusBar} from 'react-native' ;
import ImageAvatar from './ImageAvatar';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default class SplashScreen extends React.Component{
    render(){
        return(
            <React.Fragment>
                <StatusBar backgroundColor="#081232" />
                <View style={ styles.mainBox}>
                    <View></View>
                    <View style={{ width : '100%' , aspectRatio : 3/2.2 , justifyContent : 'center' , alignItems : 'center'}}>
                        <ImageAvatar data="loadingScreen"/>                        
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
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    mainBox : { 
      flex : 1 , 
      flexDirection:'column' , 
      justifyContent : 'space-between'  , 
      alignItems : 'center' , 
      backgroundColor : '#081232'
    },
    // imageBox: {
    //     width : 100 ,
    //     height : 100 ,
    //     borderRadius : 100,
    //     borderWidth : 5,
    //     borderColor : '#192B4B',
    //     backgroundColor : '#ffffff' ,
    //     position : 'relative' ,
    //     overflow : 'hidden'
    // },
    // myImage : {
    //     width : '100%' ,
    //     height : '100%' ,
        
    // },
    loadingText : {
      color :  '#EEEEEE' ,
      textAlign : 'center' ,
      paddingTop : 20 ,
      fontFamily : 'ProximaNovaA-Bold' ,
      fontSize : RFPercentage(2)
    },
    footer : {
      color : '#EEEEEE' , 
    //   fontWeight : 'normal',
      paddingBottom : 30 ,
      fontFamily : 'ProximaNovaA-Light' ,
      fontSize : RFPercentage(1.5)
    }
  });