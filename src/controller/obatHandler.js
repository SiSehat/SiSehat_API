import { medicineSchema } from "../helpers/validation_schema.js";
import { addModel, deleteModel, getAllModel, getDetailModel, updateModel } from "../models/diseaseModel.js";

// obat ====
const addObat = async (request, h) => {
  let response = null;

  try {
    const result = await medicineSchema.validateAsync(request.payload);
    const resultPost = await addModel(result, "drug");

    response = h.response(resultPost).code(201);
  } catch (error) {
    if (error.isJoi === true) {
      response = h.response({
        status: "fail",
        message: error.details,
      });

      response.code(500);
      return response;
    }

    response = h.response(error);
    response.code(500);
  }
  return response;
};

const getAllDrug = async (request, h) => {
  let response = null;
  try {
    const resultGET = await getAllModel('drug');
    response = h.response(resultGET).code(200)
  } catch (error) {
    response = h.response(error).code(404);
  }

  return response;
};

const getDetailDrug = async (request, h) => {
  const { id } = request.params;
  let response = null

  try {
    const resultGET = await getDetailModel(id, 'drug');
    response = h.response(resultGET).code(200)
  } catch (error) {
    response = h.response(error).code(404);
  }

  return response;
};

const updateDrug = async (request, h) => {
  const { id } = request.params;
  const body = request.payload;
  let response = null;

  try {
    const resultUpdate = await updateModel(id, body, 'drug');
    response = h.response(resultUpdate).code(200)
  } catch (error) {
    response = h.response(error).code(404);
  }

  return response;
};

const deleteDrug = async (request, h) => {
  const { id } = request.params;
  let response = null;

  try {
    const resultDelete = await deleteModel(id, 'drug');
    response = h.response(resultDelete).code(200)
  } catch (error) {
    response = h.response(error).code(404);
  }

  return response
};

export { addObat, getAllDrug, getDetailDrug, updateDrug, deleteDrug };
