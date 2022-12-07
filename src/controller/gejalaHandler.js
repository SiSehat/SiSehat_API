
import db from "../../db.js";
import { medicineFinderSchema, symptomFinderSchema } from "../helpers/validation_schema.js";

const firestore = db.firestore();
let getCollection = null;

const sympthomHandler = async (request, h) => {
    let response = null

    getCollection = firestore.collection('disease')

    try {
        const resultValidate = await symptomFinderSchema.validateAsync(request.payload)

        let data = await getCollection
            .where('symptom', "array-contains-any", resultValidate.symptoms).get()

        let result = [];
        data.forEach((user) => {
            result.push({
                ...user.data(),
                id: user.id
            })
        })
        
        let countVerif = [];
        let tmp = [];
        let dataSymptom = [];
        let realData = [];
        console.log(result);

        result.forEach((symptomsData, i) => {
            dataSymptom = [];
            resultValidate.symptoms.forEach((symptom, i) => {
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

        if (realData.length === 0) throw 'EmptyMedicinesExceptions'

        response = h.response({
            status: "success",
            data: realData
        })
    
        response.code(200);
    } catch (error) {
        console.log(error);
        if (error.isJoi === true) {
            response = h.response({
                status: 'fail',
                message: error.details
            })
            response.code(404);
        } else {
            response = h.response({
                status: 'fail',
                message: 'data tidak tersedia'
            })
            response.code(404);
        }
    }

    return response
}

const medicineByHandler = async (request, h) => {
    let response = null;

    try {
        const result = await medicineFinderSchema.validateAsync(request.payload)
        
        getCollection = firestore.collection('drug');
        let data = await getCollection.where('title', 'in', result.medicines).get()
        
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
        if (error.isJoi === true) {
            response = h.response({
                status: 'fail',
                message: error.details
            })
            response.code(404);
        } else {
            response = h.response({
                status: 'fail',
                message: 'data tidak tersedia'
            })
            response.code(404);
        }
    }

    return response;
}

export {
    sympthomHandler,
    medicineByHandler
}
