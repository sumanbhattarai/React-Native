import React from 'react';
import { View , Text, StyleSheet, Dimensions , SafeAreaView , Platform} from 'react-native' ;
import ImageAvatar from './ImageAvatar' ;
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBirthdayCake , faFlag , faMapMarkerAlt , faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { RFPercentage } from 'react-native-responsive-fontsize';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Introduction extends React.Component {
    state = {
        basicInfo  : [
            { name : 'Nepalese' , icon : faFlag },
            { name : '15 July, 1999' , icon : faBirthdayCake},
            { name : '+977-9845696211' , icon : faPhone },
            { name : 'Narayangarh, Nepal' , icon : faMapMarkerAlt }
        ]
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.firstBox}>
                    <ImageAvatar/>
                    <Text style={styles.name}>Suman Bhattarai</Text>
                    <Text style={styles.title}>Software Engineer</Text>
                </View>
                <View style={{ flex : 4  , flexDirection : 'column' , alignItems :'center' }}>
                    <View style={{  height : '100%' , position : 'absolute'}}>
                        <View style={styles.listDetails}></View>
                        {this.state.basicInfo.map((el , index)=>{
                            return (
                                <View style={styles.listDetails} key={index}>
                                    <Text style={styles.detailText}>
                                        <FontAwesomeIcon icon={el.icon} style={{color : '#eeeeee'}} size={ RFPercentage(2)} />
                                        &nbsp; &nbsp; &nbsp;  {el.name}
                                    </Text>
                                </View>
                            )
                        })}
                        <View style={styles.listDetails}></View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container  : {
        width : screenWidth-10, 
        // borderWidth:1, 
        // borderColor : '#eeeeee', 
        alignSelf : 'center' , 
        flexDirection : 'row',
        aspectRatio : 3/1.5 ,
        marginTop : ( Platform.OS === "ios" ) ? 50 : 0
    },

    // box having name and image
    firstBox :{
        // borderColor : 'white', 
        // borderWidth :1 ,  
        flex : 3 , 
        justifyContent : 'center', 
        alignItems : 'center' 
    },
    name : {
        color : '#eeeeee',
        // fontSize : screenWidth > 330 ? 18 : 15 ,
        fontSize : RFPercentage(2.5),
        fontFamily : 'ProximaNovaA-Bold',
        marginTop  : 10
    },
    title : {
        color : '#eeeeee',
        // fontSize : 13,
        fontSize : RFPercentage(1.5),
        fontFamily : 'ProximaNovaA-Light'
    },
    listDetails : {
        flex : 1,
        // borderColor : 'white', 
        // borderWidth : 1, 
        justifyContent : 'center'  , 
        alignItems : 'flex-start',
    },
    detailText : {
        color : '#eeeeee' ,
        fontSize : RFPercentage(1.7),
        fontFamily : 'ProximaNovaA-Light'
    }
})
