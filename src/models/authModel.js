import db from "../../db.js";

const registerModel = (body) => {
    const postRef = db.database().ref('auth');

    return new Promise((resolve, reject) => {
        postRef.push().set(body, (error) => {
            if (error) {
                reject({
                    status: 'fail',
                    message: 'gagal register'
                })
            } else {
                resolve({
                    status: 'success',
                    message: 'berhasil register'
                })
            }
        })
    })
}

const loginModel = (body) => {
    const postRef = db.database().ref('auth');

    return new Promise((resolve, reject) => {
        postRef
            .orderByChild('email').equalTo(body.email.toString())
            .once('value', (snapshot) => {
                const account = snapshot.val()
                const key = Object.keys(account ?? [])[0]

                if (account == null || account[key].password.indexOf(body.password) === -1) {
                    return reject({
                        status: 'fail',
                        message: 'user tidak ditemukan / password salah',
                        data: null
                    })
                }

                resolve({
                    status: 'success',
                    message: 'user ditemukan',
                    data: account[key]
                })
            })
    })
}

export {
    registerModel,
    loginModel,
}