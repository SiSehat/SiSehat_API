import db from "../../db.js";

const firestore = db.firestore();
let getCollection = null;

// obat ====
const addObat = async (request, h) => {
  const data = request.payload;

  getCollection = firestore.collection("drug");
  const getId = await getCollection.add(data);

  if (getId) {
    const response = h.response({
      status: "success",
      message: "Obat berhasil ditambahkan",
      data: {
        id: getId.id,
        data
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Obat gagal ditambahkan",
  });

  response.code(500);
  return response;
};

const getAllDrug = async () => {
  getCollection = firestore.collection("drug")
  let datasDrug = (await getCollection.get()).docs
  datasDrug = datasDrug.map((drug) => {
    return {
      id: drug.id,
      data: drug.data()
    }
  })

  if(datasDrug.length !== undefined) {
    return {
      status: 'success',
      datasDrug
    }
  }
}

const getDetailDrug = async (request, h) => {
  const { id } = request.params;

  getCollection = firestore.collection("drug");
  const dataObat = (await getCollection.get()).docs.find(
    (value) => value.id === id
  );

  if (dataObat) {
    return {
      status: "success",
      id: dataObat.id,
      data: {
        data: dataObat.data(),
      },
    };
  } else {
    const response = h.response({
      status: "fail",
      message: "Obat tidak ditemukan",
    });

    response.code(404);
    return response;
  }
};

const updateDrug = async (request, h) => {
  const { id } = request.params;
  const body = request.payload;

  getCollection = firestore.collection("drug")
  const dataObat = getCollection.doc(id)
  const oldData = (await dataObat.get()).data()
  const publish_date = new Date().toISOString();

  if (oldData) {
    dataObat.update({
      ...body,
      publish_date
    });

    const response = h.response({
      status: 'success',
      message: 'Obat berhasil diperbaharui',
      data: (await dataObat.get()).data()
    });

    response.code(200)
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal diperbaharui, id tidak ditemukan'
  })

  response.code(404)
  return response
}

const deleteDrug = async (request, h) => {
  const { id } = request.params;

  getCollection = firestore.collection("drug")
  const dataObat = getCollection.doc(id);

  if (dataObat.id === id) {
    await dataObat.delete();

    const response = h.response({
      status: 'success',
      message: 'obat berhasil dihapus'
    });
    response.code(200)
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'obat gagal dihapus, id tidak ditemukan'
  });
  response.code(404);
  return response;
}

// const addObat = async (req, res, next) => {
//   try {
//     const data = req.body;
//     data.id = Math.random() * 100;

//     getCollection = firestore.collection("drug");
//     const getId = await getCollection.add(data);

//     res.status(200);
//     res.send({
//       message: "success",
//       id: getId.id,
//       data,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(400).send({ message: error.message });
//   }
// };

// const getDetailDrug = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     getCollection = firestore.collection("drug");
//     const data = await getCollection
//       .get()
//       .docs.find((value) => value.id === id);

//     if (!data.exists) {
//       res.status(404).send("drug with the given ID not found");
//     } else {
//       res.status(200).send(data.data());
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//     console.log(error);
//   }
// };

export { addObat, getAllDrug, getDetailDrug, updateDrug, deleteDrug };
