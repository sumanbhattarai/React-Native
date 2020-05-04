import React, { Component } from 'react'
import {View  , ScrollView, Dimensions, Text , StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook , faTwitter , faInstagram , faLinkedin , faGithub , faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize" 


// const screenWidth = Math.round(Dimensions.get('window').width);

export default class SocialLinks extends Component {
    state = {
        socialLinks : [
            { username : '@sumanbhattaraiofficial' , icon : faFacebook},
            { username : '@sbofficial' , icon : faInstagram } ,
            { username : '@sumanbhattarai' , icon : faGithub },
            { username : '@sbofficial' , icon : faLinkedin},
            { username : '+977-9845696211' , icon : faWhatsapp},
            { username : '@sumanbhattarai_' , icon : faTwitter },
        ]
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.findMe}>Do mail me at <Text style={{color : '#081232' , fontWeight : 'bold'}}>ersumanbhattarai@gmail.com</Text> for business purpose rather than other social medias. {"\n"}</Text>
                <View style={{ alignSelf : 'center' }} >
                {
                    this.state.socialLinks.map((el ,index)=>{
                        return (
                                <Text key={index} style={styles.socialLinks}> <FontAwesomeIcon icon={el.icon} size = { RFPercentage(3)} /> {el.username} {"\n"} </Text> 
                        )
                    })
                }
                <Text>{"\n"}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles= StyleSheet.create({
    container : {
        backgroundColor : '#ffffff',
        padding: 20
    },
    findMe : {
        fontFamily : 'ProximaNovaA-Light',
        fontSize : RFPercentage(2)
    },
    socialLinks : {
        fontSize  : RFPercentage(2),
        fontFamily : 'ProximaNovaA-Bold' ,
        color : '#081232' 
    }
})