import db from "../../db.js";
import { diseaseSchema } from "../helpers/validation_schema.js";

const firestore = db.firestore();
let getCollection = null;

const addDisease = async (request, h) => {
  let response = null;

  try {
    const result = await diseaseSchema.validateAsync(request.payload)

    getCollection = firestore.collection("disease");
    const getId = await getCollection.add(result);
  
    if (getCollection) {
      response = h.response({
        status: "success",
        message: "Penyakit berhasil ditambahkan",
        data: {
          id: getId.id,
          data,
        },
      });
  
      response.code(201);
    }
  } catch (error) {
    if (error.isJoi === true)  {
      response = h.response({
        status: "fail",
        message: error.details,
      });

      response.code(500);
    } else {
      response = h.response({
        status: "fail",
        message: "Penyakit gagal ditambahkan",
      });

      response.code(500);
    }
  }

  return response;
};

const getAllDisease = async () => {
  getCollection = firestore.collection("disease");
  let datasDisease = (await getCollection.get()).docs;
  datasDisease = datasDisease.map((disease) => {
    return {
      id: disease.id,
      data: disease.data(),
    };
  });

  if (datasDisease.length !== undefined) {
    return {
      status: "success",
      datasDisease,
    };
  }
};

const getDetailDisease = async (request, h) => {
  const { id } = request.params;

  getCollection = firestore.collection("disease");
  const dataObat = (await getCollection.get()).docs.find(
    (value) => value.id === id
  );

  if (dataObat) {
    return {
      status: "success",
      id: dataObat.id,
      data: dataObat.data(),
    };
  } else {
    const response = h.response({
      status: "fail",
      message: "Penyakit tidak ditemukan",
    });

    response.code(404);
    return response;
  }
};

const updateDisease = async (request, h) => {
  const { id } = request.params;
  const body = request.payload;

  getCollection = firestore.collection("disease");
  const dataObat = getCollection.doc(id);
  const oldData = (await dataObat.get()).data();
  const publish_date = new Date().toISOString();
  
  if (oldData) {
    dataObat.update({
      ...body,
      publish_date,
    });

    const response = h.response({
      status: "success",
      message: "Penyakit berhasil diperbaharui",
      data: (await dataObat.get()).data(),
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Gagal diperbaharui, id tidak ditemukan",
  });

  response.code(404);
  return response;
};

const deleteDisease = async (request, h) => {
  const { id } = request.params;

  getCollection = firestore.collection("disease");
  const dataObat = getCollection.doc(id);
  const idValidFromDB = (await getCollection.get()).docs.find(
    (value) => value.id === id
  );

  if (idValidFromDB) {
    await dataObat.delete();

    const response = h.response({
      status: "success",
      message: "obat berhasil dihapus",
    });

    return response;
  }

  const response = h.response({
    status: "fail",
    message: "obat gagal dihapus, id tidak ditemukan",
  });
  response.code(404);
  return response;
};

export { addDisease, getAllDisease, getDetailDisease, deleteDisease, updateDisease };
