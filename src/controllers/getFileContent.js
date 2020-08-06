module.exports =  (db) => {
    return (nanoId) => {
        return new Promise((resolve , reject) => {
            db.getFileContent(nanoId)
            .then(result => {
                if(result.length > 0){
                    resolve(result[0])
                }else{
                    reject(new Error('No curresponding row for the provided nanoId.'))
                }
            })
        })
    }
}