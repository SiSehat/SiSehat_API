
import db from "../../db.js";

const firestore = db.firestore();
let getCollection = null;

const sympthomHandler = async (request, h) => {
    const symptoms = request.payload.symptom;
    let response = null

    getCollection = firestore.collection('disease')

    try {
        let data = await getCollection
            .where('symptom', "array-contains-any", symptoms).get()

        let result = [];
        data.forEach((user,i) => {
            result.push(user.data())
        })

        let countVerif = [];
        let tmp = [];
        let dataSymptom = [];
        let realData = [];

        result.forEach((symptomsData, i) => {
            dataSymptom = [];
            symptoms.forEach((symptom, i) => {
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

        // console.log(realData);

        response = h.response({
            status: "success",
            data: realData
        })
    
        response.code(200);
    } catch (error) {
        console.log(error);
    }

    return response
}

export default sympthomHandler
