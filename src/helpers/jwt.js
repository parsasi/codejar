const jwt = require('jsonwebtoken')

module.exports.verify = (token , secret) => {
    return new Promise((resolve,reject) => {
        jwt.verify(token , secret , (err , data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}

module.exports.sign = (data , secret) => {
    return new Promise((resolve,reject) => {
        if(typeof data === 'object'){
            jwt.sign(data, secret, { expiresIn: "1d" } , (err , token) => {
                if(err){
                    reject(err)
                }
                resolve(token)
            })
        }else{
            reject(new Error('JWT requires an object'))
        }
    })
}
