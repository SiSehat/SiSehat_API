import db from "../../db.js";

const firestore = db.firestore();
let getCollection = null;

const sympthomHandler = async (request, h) => {
    const symptoms = request.payload.symptom;

    getCollection = firestore.collection('disease')
    console.log(symptoms);
    let data = await getCollection
        .where('symptom', "in", [symptoms]).get();
        
    let result = [];
    data.forEach(user => {
        console.log(user.exists);
        result.push(user.data())
    })

    const response = h.response({
        status: "success",
        data: result
    })

    response.code(200);
    return response
}

export default sympthomHandler
