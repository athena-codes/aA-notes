const userLeft = false
const userIdle = false

function watchingVideoPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                mesage: ':('
            })
        } else if (userIdle) {
            reject({
                name: 'User is Idle',
                message: 'Not interesting enough!'
            })
        } else {
            resolve('Thumbs up and subscribe!')
        }
    })
}

watchingVideoPromise().then((msg) => {
    console.log('Success: ' + msg)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})
