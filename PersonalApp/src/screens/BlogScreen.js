import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize'
import BlogPost from '../components/BlogPost';

export default class BlogScreen extends React.Component {
    state = {
        data : [
            {
                title : 'Why choose React Native ?' ,
                tags : 'react-native , mobile app development',
                description : 'React Native is an open-source mobile application framework created by Facebook on March 26, 2015.',
                points : [
                    { point : 'i. React Native allows developers to create mobile apps using website technology. So a developer who is handy in web development can easily develop a mobile app using React Native. '},
                    { point : 'ii. Since React Native uses JSX, a developer isn’t required to learn complex languages such as Objective-C and Java to develop an app.'},
                    { point : 'iii. React Native uses fundamental Android and iOS building blocks to compile Native apps for both platforms in JavaScript. This makes handling the code base easier, and the addition of new features is simplified as well, even while the app is running.'},
                    { point : 'iv. React Native allows you to build apps faster. Instead of recompiling, you can reload an app instantly. By making use of its Hot Reloading feature, you can even run new features while maintaining your application state.'},
                    { point : 'v. On top of being responsive and providing impressive user experience, React Native apps are faster and agiler.'}
                ],
                show : false
            }
        ]
    }

    toggleView = (index)=>{
       const data = [...this.state.data]
       data[index].show = !this.state.data[index].show
       this.setState({
           data  : data
       })
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.firstBox}>
                    <Text style={{ fontFamily : 'ProximaNovaA-Bold' , color : '#eeeeee' , fontSize : RFPercentage(2)}}>Blogging is a conversation, not a code.</Text>
                </View>
                <View style={styles.secondBox}>
                    <ScrollView>
                        {
                            this.state.data.map((el , index)=>{
                                return <BlogPost key={index} data={el} toggleView={()=>this.toggleView(index)} />
                            })
                        }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection : 'column',
        backgroundColor : "#081232",
    },
    firstBox : {
        flex :1 ,
        backgroundColor  :'red' ,
        justifyContent : 'center',
        alignItems : 'center' , 
        backgroundColor : "#081232", 
    },
    secondBox : {
        flex : 5 ,
        backgroundColor  :'#eeeeee'
    }
})