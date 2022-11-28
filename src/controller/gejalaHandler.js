
import db from "../../db.js";

const firestore = db.firestore();
let getCollection = null;

const sympthomHandler = async (request, h) => {
    const symptoms = request.payload.symptom;
    let response = null

    getCollection = firestore.collection('disease')

    try {
        let data = await getCollection
            .where('symptom', "array-contains-any", symptoms).get()

        let result = [];
        data.forEach((user,i) => {
            result.push(user.data())
        })

        let countVerif = [];
        let tmp = [];
        let dataSymptom = [];
        let realData = [];

        result.forEach((symptomsData, i) => {
            dataSymptom = [];
            symptoms.forEach((symptom, i) => {
                tmp = symptomsData.symptom.filter(data => data === symptom)
                if (tmp.length > 0) {
                    dataSymptom.push(...tmp)
                }
            })
            
            countVerif.push(dataSymptom)

            if (i == 0 || countVerif[i - 1].length < countVerif[i].length) {
                console.log(countVerif);
                realData = symptomsData;
            }
            
            console.log('ganti data');
        })

        if (medicinesDetail.length === 0) throw 'EmptyMedicinesExceptions'

        response = h.response({
            status: "success",
            data: realData
        })
    
        response.code(200);
    } catch (error) {
        response = h.response({
            status: 'fail',
            message: 'data tidak tersedia'
        })
        response.code(404);
    }

    return response
}

const medicineByHandler = async (request, h) => {
    const medicines = request.payload.medicines;
    getCollection = firestore.collection('drug');
    let response = null;

    try {
        let data = await getCollection.where('title', 'in', medicines).get()
        
        const medicinesDetail = []
        data.forEach(medicine => {
            medicinesDetail.push(medicine.data());
        })

        if (medicinesDetail.length === 0) throw 'EmptyMedicinesExceptions'

        response = h.response({
            status: "success",
            data: medicinesDetail
        })
        response.code(200);
    } catch (error) {
        console.error(error);
        response = h.response({
            status: 'fail',
            message: 'data tidak tersedia'
        })
        response.code(404);
    }

    return response;
}

export {
    sympthomHandler,
    medicineByHandler
}
