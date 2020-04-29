import React, { Component } from 'react'
import {View , Text , StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook , faTwitter , faInstagram , faLinkedin , faGithub , faWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
            <View style={styles.container}>
                <Text style={styles.findMe}>Do mail me at <Text style={{color : '#081232' , fontWeight : 'bold'}}>ersumanbhattarai@gmail.com</Text> for business purpose rather than other social medias.</Text>
                <View style={{ alignSelf : 'center' , paddingTop : 20 }} >
                {
                    this.state.socialLinks.map((el ,index)=>{
                        return (
                            <View key={index} style={{ paddingBottom : 10 }}>
                                <Text style={styles.socialLinks}> <FontAwesomeIcon icon={el.icon} size = {30} /> {el.username} </Text>
                            </View>
                        )
                    })
                }
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container : {
        backgroundColor : '#ffffff',
        flex : 1 ,
        padding: 50
    },
    findMe : {
        fontFamily : 'ProximaNovaA-Light',
        fontSize : 15
    },
    socialLinks : {
        fontSize  :17 ,
        fontFamily : 'ProximaNovaA-Bold' ,
        color : '#081232' 
    }
})