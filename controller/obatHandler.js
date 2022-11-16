import db from '../db.js'

const firestore = db.firestore();
let getCollection = null

// obat ====
const addObat = async (req, res, next) => {
  try {
    const data = req.body;
    
    getCollection = firestore.collection('drug')
    const id = getCollection.id

    res.status(200);
    res.send({
        message: 'success',
        data,
        id
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: error.message });
  }
};

const getDetailDrug = async (req, res, next) => {
  try {
    const id = req.params.id;
    const drug = firestore.collection('drug').doc(id);
    const data = await drug.get()
    
    if (!data.exists) {
      res.status(404).send('drug with the given ID not found')
    } else {
      res.status(200).send(data.data())
    }
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error);
  }
}

export { addObat, getDetailDrug }