import { diseaseSchema } from "../helpers/validation_schema.js";
import { addModel, deleteModel, getAllModel, getDetailModel, updateModel } from '../models/diseaseModel.js'

const addDisease = async (request, h) => {
  let response = null

  try {
    const result = await diseaseSchema.validateAsync(request.payload)
    const resultPost = await addModel(result, 'disease')
    response = h.response(resultPost).code(201);
  } catch (error) {
    if (error.isJoi)  {
      response = h.response({ status: "fail", ...error.details, }).code(500);
    }
    if (error.status == 'fail') {
      response = h.response(error).code(500)
    }
  }

  return response;
};

const getAllDisease = async (request, h) => {
  let response = null

  try {
    const resultGET = await getAllModel('disease')
    response = h.response(resultGET).code(200)
  } catch (error) {
    response =  h.response(error).code(404);
  }

  return response;
};

const getDetailDisease = async (request, h) => {
  const { id } = request.params;
  let response = null;

  try {
    const resultGET = await getDetailModel(id, 'disease');
    response = h.response(resultGET).code(200);
  } catch (error) {
    response = h.response(error).code(404);
  }

  return response;
};

const updateDisease = async (request, h) => {
  const { id } = request.params;
  const body = request.payload;
  let response = null

  try {
    const resultUpdate = await updateModel(id, body, 'disease')
    response = h.response(resultUpdate).code(200)
  } catch (error) {
    response = h.response(error).code(404);
  }

  return response;
};

const deleteDisease = async (request, h) => {
  const { id } = request.params;
  let response = null;

  try {
    const resultDelete = await deleteModel(id, 'disease');
    response = h.response(resultDelete).code(200)
  } catch (error) {
    response = h.response(error).code(404)
  }
  
  return response;
};

export { addDisease, getAllDisease, getDetailDisease, deleteDisease, updateDisease };