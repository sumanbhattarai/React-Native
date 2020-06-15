import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase('places.db')

export const init = ()=> {
    const promise = new Promise ((resolve , reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS places( id TEXT PRIMARY KEY NOT NULL , title TEXT NOT NULL, address TEXT NOT NULL , imageURI TEXT NOT NULL, latitude REAL NOT NULL , longitude REAL NOT NULL );' ,
            [],
            (_,result)=>{
                resolve(result)
            },
            (_, error)=>{
                reject(error)
            })
        })
    })
    return promise
    
}

export const insertPlace = (id , title , address , src , lat , long)=> {
    const promise = new Promise((resolve , reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('INSERT INTO places (id , title , address , imageURI , latitude , longitude) VALUES (?,?,?,?,?,?);' ,
            [ id ,title , address, src , lat , long],
            (_ , result)=>{
                resolve(result)
            },
            (_, error )=>{
                reject(error)
            })
        })
    })
    return promise

}

export const getPlace = ()=> {
    const promise = new Promise((resolve , reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(' SELECT * FROM places ;' ,
            [],
            (_ , result)=>{
                resolve(result)
            },
            (_, error )=>{
                reject(error)
            })
        })
    })
    return promise

}

// export const init = ()=> {
//     const promise = new Promise ((resolve , reject)=>{
//         db.transaction((tx)=>{
//             tx.executeSql("CREATE TABLE IF NOT EXISTS user ( id TEXT PRIMAY KEY  ,name TEXT NOT NULL , age TEXT NOT NULL );" ,
//             [],
//             (_,result)=>{
//                 resolve(result)
//             },
//             (_, error)=>{
//                 reject(error)
//             })
//         })
//     })
//     return promise
    
// }

// export const insertAll = ( id ,name , age )=>{
//     const promise = new Promise ((resolve , reject)=>{
//         db.transaction((tx)=>{
//             tx.executeSql('INSERT INTO user ( id ,name , age ) VALUES ( ? , ?,?) ' ,
//             [id ,name , age ],
//             (_,result)=>{
//                 resolve(result)
//             },
//             (_, error)=>{
//                 reject(error)
//             })
//         })
//     })
//     return promise
    
// }

// export const viewAll = ()=> {
//     const promise = new Promise ((resolve , reject)=>{
//         db.transaction((tx)=>{
//             tx.executeSql('SELECT * FROM user;' ,
//             [],
//             (_,result)=>{
//                 resolve(result)
//             },
//             (_, error)=>{
//                 reject(error)
//             })
//         })
//     })
//     return promise
    
// }

// export const deleteAll = ()=> {
//     const promise = new Promise ((resolve , reject)=>{
//         db.transaction((tx)=>{
//             tx.executeSql('DROP TABLE IF EXISTS places;' ,
//             [],
//             (_,result)=>{
//                 resolve(result)
//             },
//             (_, error)=>{
//                 reject(error)
//             })
//         })
//     })
//     return promise
    
// }
