const addHistoryData = (param) => {

    return new Promise((resolve, reject) => {
        User.findOne(param, function(err, user) {
            if (err) {
                reject(err);
            } else  {
                resolve(user)
            }
        }) 
    })


}