import db from "../../db.js";
import { loginSchema, registerSchema } from "../helpers/validation_schema.js";
import { loginModel, registerModel } from "../models/authModel.js";

const firestore = db.firestore();
let getCollection = null;

const register = async (request, h) => {
    let response = null
    let data = request.payload

    try {

        const result = await registerSchema.validateAsync(request.payload)

        const resultRegister = await registerModel(result)

        // getCollection = firestore.collection('users')
        // const getId = await getCollection.add(result);

        response = h.response({
            status: 'success',
            message: 'berhasil menambahkan user',
            data: {
                // id: getId.id,
                // data
            }
        })

        response.code(201);
    } catch (error) {
        if (error.isJoi === true) {
            response = h.response({
                status: 'fail',
                message: error.details
            })
            response.code(422);
        } else {
            response = h.response({
                status: 'fail',
                message: 'gagal menambahkan user baru'
            })
            response.code(500);
            console.log(error);
        }
    }

    return response
}

const login = async (request, h) => {
    let response = null;

    try {
        const result = await loginSchema.validateAsync(request.payload)

        const resultLogin = await loginModel(result)
        response = h.response(resultLogin).code(200);
        
    } catch (error) {
        if (error.isJoi === true) {
            response = h.response({
                status: 'fail',
                message: error.details
            })
    
            response.code(404);
        } else {
            response = h.response(error).code(404);
        }
    }

    return response;
}

export {
    register, login
}