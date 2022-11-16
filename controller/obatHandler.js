import db from '../db.js'

const firestore = db.firestore();
let getCollection = null

// obat ====
const addObat = async (req, res, next) => {
  try {
    const data = req.body;
    data.id = Math.random() * 100;;
    
    getCollection = firestore.collection('drug')
    const getId = await getCollection.add(data);

    res.status(200);
    res.send({
        message: 'success',
        id: getId.id,
        data,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: error.message });
  }
};

const getDetailDrug = async (req, res, next) => {
  try {
    
    const id = req.params.id;
    getCollection = firestore.collection('drug');
    const data = await getCollection.get().docs.find(value => value.id === id)
    
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