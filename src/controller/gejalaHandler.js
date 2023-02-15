import { medicineFinderSchema, symptomFinderSchema } from "../helpers/validation_schema.js";
import { getDetailModel, medicineModel, symptomModel } from "../models/diseaseModel.js";

const sympthomHandler = async (request, h) => {
    let response = null

    try {
        const resultValidate = await symptomFinderSchema.validateAsync(request.payload)
        const resultSymptom = await symptomModel(resultValidate.symptoms)
        let max = {total: 0};
        let sameData = true;

        if (resultValidate.symptoms.length != 1) {
            for (const [index, obj] of resultSymptom.entries()) {
                if (obj.total >= max.total) {
                    max = obj
                }
                
                if(obj.total != resultSymptom[index].total) {
                    sameData = false
                }
            }
        } else {
            max = resultSymptom[0];
            sameData = false;
        }

        console.log(max);

        if(sameData) throw "not found"

        const resultSymptomDetail = await getDetailModel(max.data, 'disease');
        response = h.response(resultSymptomDetail)
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
        const resultMedicine = await medicineModel(result.medicines);

        response = h.response(resultMedicine).code(200);
    } catch (error) {
        if (error.isJoi === true) {
            response = h.response({
                status: 'fail',
                message: error.details
            }).code(404);
        } else {
            response = h.response(error).code(404);
        }
    }

    return response;
}

export {
    sympthomHandler,
    medicineByHandler
}
