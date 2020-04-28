import React from 'react';
import { View , Text, StyleSheet, Dimensions , SafeAreaView , Platform} from 'react-native' ;
import ImageAvatar from './ImageAvatar' ;
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBirthdayCake , faFlag , faMapMarkerAlt , faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Introduction extends React.Component {
    state = {
        basicInfo  : [
            { name : 'Nepali' , icon : faFlag },
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
                <View style={{ flex : 4  , flexDirection : 'column'}}>
                    {/* <View style={styles.listDetails}>
                        <Text style={styles.detailText}>
                            <FontAwesomeIcon icon={faBirthdayCake} style={{color : '#eeeeee' , fontSize : 13}} />
                            &nbsp; July 15
                        </Text>
                    </View> */}

                    <View style={styles.listDetails}></View>

                    {this.state.basicInfo.map((el , index)=>{
                        return (
                            <View style={styles.listDetails} key={index}>
                                <Text style={styles.detailText}>
                                    <FontAwesomeIcon icon={el.icon} style={{color : '#eeeeee' , fontSize : 13}} />
                                    &nbsp; {el.name}
                                </Text>
                            </View>
                        )
                    })}

                    <View style={styles.listDetails}></View>

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
        height : 200 ,
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
        fontSize : 18,
        fontFamily : 'ProximaNovaA-Bold',
        marginTop  : 10
    },
    title : {
        color : '#eeeeee',
        fontSize : 13,
    },
    listDetails : {
        flex : 1,
        // borderColor : 'white', 
        // borderWidth : 1, 
        justifyContent : 'center'  , 
        alignItems : 'flex-start',
        paddingLeft : 60
    },
    detailText : {
        color : '#eeeeee' ,
        fontSize : 13
    }
})
