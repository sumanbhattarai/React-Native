import { insertPlace , getPlace } from '../../db/db'
var RNFS = require('react-native-fs')


export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACE  = 'LOAD_PLACE'

export const loadPlace = ()=>{
    return dispatch => {
            getPlace().then(result=>{
                var temp = [];
                for (let i = 0; i < result.rows.length; ++i) {
                temp.push(result.rows.item(i));
                }
                dispatch({
                    type : LOAD_PLACE ,
                    places: temp
                })
            })
    }
}

export const addPlace = (title , address , imgSrc) =>{
    return  dispatch => {
        const fileName = imgSrc.split('/').pop()
        const newPath = RNFS.DocumentDirectoryPath + '/' + fileName
        RNFS.copyFile(imgSrc , newPath).then(()=>{
            const id = new Date().toString() // generating new ID ( Not single sec ma 2choti bhaye error aauncha)
            // insert into data base first
            insertPlace( id , title , address , newPath , 20.9 , 39.0 ).then(()=>{
                console.log('yahoooooooo')
                // insert into redux memory storage also
                dispatch({
                    type : ADD_PLACE ,
                    placeData : {
                        id :  id ,
                        title : title,
                        address : address,
                        src : newPath
                    }
                })
            }).catch(error=>{
                console.log(error)
            })
        }).catch(()=>{
            console.log('error')
        })
    }
}