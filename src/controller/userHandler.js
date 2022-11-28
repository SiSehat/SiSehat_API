import db from "../../db.js";

const firestore = db.firestore();
let getCollection = null;

const register = async (request, h) => {
    const data = request.payload;
    let response = null
    
    try {
        getCollection = firestore.collection('users')
        const getId = await getCollection.add(data);

        if (!getId) throw 'EmptyIDExceptions';

        response = h.response({
            status: 'success',
            message: 'berhasil menambahkan user',
            data: {
                id: getId.id,
                data
            }
        })

        response.code(201);
    } catch (error) {
        response = h.response({
            status: 'fail',
            message: 'gagal menambahkan user baru'
        })

        response.code(500);

    }

    return response
}

const login = async (request, h) => {
    const data = request.payload;
    let response = null;

    try {
        getCollection = firestore.collection('users')
        const matchUser = (await getCollection.get()).docs.find(userDB => {
            if (userDB.data().username === data.username && userDB.data().password === data.password)  {
                return userDB.data();
            }
        })
        
        if (matchUser === undefined) throw 'UnregisteredUserException'

        response = h.response({
            status: 'success',
            message: 'user ditemukan',
            data: matchUser.data()
        })

        response.code(200);
        
    } catch (error) {
        response = h.response({
            statusbar: 'fail',
            message: 'user tidak ditemukan'
        })

        response.code(404);
    }

    return response;
}

export {
    register, login
}