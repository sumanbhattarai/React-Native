import React, { Component } from 'react'
import {ScrollView , StyleSheet} from 'react-native'
import PortfolioCard from '../PortfolioCard'

export default class Web extends Component {
    state = {
        projects : [
            {
                name : 'School-Website-Template',
                description : 'Highly responsive and clean UI template for schools website.',
                tools : 'Reactjs , Redux , React-Bootstrap , NodeJs , MongoDB ' ,
                link : 'https://sumanbhattaraischool.herokuapp.com'
            },
            {
                name : 'Weather-App',
                description : 'Simple Weather detecting web app.',
                tools : 'NodeJs (ExpressJs as web framework ) ' ,
                link : 'https://github.com/sumanbhattarai/Node.JS/tree/master/web-server'
            },
            {
                name : 'Notes-App',
                description : 'Simple Note App (Backend Only)',
                tools : 'NodeJs (ExpressJs as web framework ) ' ,
                link : 'https://github.com/sumanbhattarai/Node.JS/tree/master/notes-app'
            },
            {
                name : 'MERN-App-Demo',
                description : 'It is to demonstrate a simple MERN Application.',
                tools : 'MERN Stack' ,
                link : 'https://github.com/sumanbhattarai/MERN-Stack-Projects/tree/master/first-mern-app'
            },
            {
                name : 'Weather-App',
                description : 'Simple Weather App by React',
                tools : 'ReactJs' ,
                link : 'https://github.com/sumanbhattarai/ReactJs/tree/master/weather-app'
            }
        ]
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.projects.map((el , index)=>{
                        return <PortfolioCard data={el} key={index} />
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor : '#eeeeee'
    }
})
