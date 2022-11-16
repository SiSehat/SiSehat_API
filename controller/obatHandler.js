import firestore from '../db.js';

// obat ====
const addObat = async (req, res, next) => {
  try {
    const data = req.body;
    data['id'] = Math.floor(Math.random() * 100);

    await firestore.collection("drug").doc().set(data);
    
    res.status(200);
    res.send({
        message: 'success',
        data
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// const getDetailDrug = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const drug = await firestore.collection("drug").doc(id);
//     const data = await drug.get();

//     if (!data.exists) {
//       res.status(404).send({
//         message: "Drug not found",
//       });
//     } else {
//       res.send(data.data());
//     }
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// };

export {
    addObat
}