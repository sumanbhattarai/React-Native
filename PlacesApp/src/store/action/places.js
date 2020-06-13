var RNFS = require('react-native-fs')

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title , address , imgSrc) =>{
    return async dispatch => {
        const fileName = imgSrc.split('/').pop()
        const newPath = RNFS.DocumentDirectoryPath + '/' + fileName
        RNFS.copyFile ( imgSrc , newPath).then(()=>{
            console.log('success')
            dispatch({
                type : ADD_PLACE ,
                placeData : {
                    title : title,
                    address : address,
                    src : newPath
                }
            })
        }).catch(()=>{
            console.log('error')
        })
    }
}