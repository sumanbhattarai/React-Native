import React from 'react' ;
import {View , ScrollView , Text , StyleSheet} from 'react-native' ;

export default function () {
    return(
        <ScrollView style={{padding : 20 , backgroundColor : 'white' }} >
            <Text style={styles.textStyle}>
                I am a higly motivated <Text style={styles.highlight}> software engineering </Text> student currently at third year. I have a deep passion on Cyber Security and Web / App development. Love learning new things and tools everyday. {"\n"}{"\n"}
                I am a <Text style={styles.highlight}> full stack web developer </Text> with very good knowledge of both front end and back end tools and technologies. {"\n"}{"\n"}
                As a front end developer , I've many years of experience in <Text style={styles.highlight}>React.js</Text> library. I am simply a React developer. Similarly, i have a very good knowledge of Material UI , Ant D , Redux ( for better state management ) , React-Hooks and even Next.js. {"\n"}{"\n"}
                As a back end developer, I've many years of experience in <Text style={styles.highlight}> Node.js</Text> with  <Text style={styles.highlight}>Express.js</Text> as an web framework. I use <Text style={styles.highlight}>mongoDB</Text> as the database. I have a quiet good knowledge of <Text style={styles.highlight}>GraphQL</Text> too. {"\n"}{"\n"}
                Besides web development, I am quiet good at making cross platform mobile apps using <Text style={styles.highlight}>React Native</Text>.  {"\n"}{"\n"}
                I actually code following all the standard pattern and usually splitting up the code in order to reuse and make the managing process much more faster and easier. {"\n"}{"\n"}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 18 , 
        fontFamily : 'ProximaNovaA-Light'
    },
    highlight : {
        fontFamily : 'ProximaNovaA-Bold' ,
        color : '#081232'
    }
})