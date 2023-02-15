import { medicineFinderSchema, symptomFinderSchema } from "../helpers/validation_schema.js";
import { getByIdModel, getDetailModel, medicineModel, symptomModel } from "../models/diseaseModel.js";

const sympthomHandler = async (request, h) => {
    let response = null

    try {
        const resultValidate = await symptomFinderSchema.validateAsync(request.payload)
        const resultSymptom = await symptomModel(resultValidate.symptoms)
        let symptomDatas = [{total: 0}];
        let sameData = 0;

        // console.log(sortingSymptom);
        for (const [index, obj] of resultSymptom.entries()) {
            if (obj.total >= symptomDatas[0].total) {
                symptomDatas = [obj]
            }
            
            if(obj.total != resultSymptom[index - 1]?.total &&
                obj.id != resultSymptom[index - 1]?.id) {
                sameData++
            }
        }

        for (let index = 0; index < resultSymptom.length - sameData; index++) {
            if (!resultSymptom[index].id.includes(resultSymptom[index - 1]?.id)) {
                symptomDatas.push(resultSymptom[index])
            }
        }
        console.log(symptomDatas);
        // console.log(sameData);

        const resultSymptoms = await getByIdModel(symptomDatas, 'disease');
        console.log(resultSymptoms);
        response = h.response(resultSymptoms)
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
