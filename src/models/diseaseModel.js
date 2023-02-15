import db from "../../db.js";

const getAllModel = function (collectionName) {
    let getRef = db.database().ref(collectionName);

    return new Promise((resolve, reject) => {
        getRef.once('value', (snapshot) => {
            if (snapshot.val() == null) {
                return reject({
                    status: 'fail',
                    data: null
                })
            }
            const datas = [];
            snapshot.forEach((data) => {
                datas.push({
                    id: data.key,
                    data: data.val()
                })
            })
            resolve({
                status: 'success',
                datas: datas
            })
        })
    })
}

const addModel = function (body, collectionName) {
    const postRef = db.database().ref(collectionName);

    return new Promise((resolve, reject) => {
        postRef.push().set(body, (err) => {
            if (err) {
                reject({ 
                    status: 'fail', 
                    message: 'gagal ditambah' 
                })
            } else {
                resolve({
                    status: 'success', 
                    message: `${collectionName} berhasil ditambahkan`,
                    data: body
                })
            }
        })
    })
}

const getDetailModel = function(id, collectionName) {
    const getRef = db.database().ref(collectionName);
    return new Promise((resolve, reject) => {
        getRef.child(id).once('value', (snapshot) => {
            if (snapshot.val() == null) {
                reject({
                    status: 'fail',
                    data: null
                })
            }
            resolve({
                status: 'success',
                id,
                data: snapshot.val()
            })
        })
    })
}

const updateModel = function(id, body, collectionName) {
    const updateRef = db.database().ref(collectionName)

    return new Promise((resolve, reject) => {        
        updateRef.once('value', function(snapshot) {
            const detectedId = Object.keys(snapshot.val() ?? []).find(idSnap => idSnap == id)
            if (detectedId) {
                return updateRef.child(id).update(body, (err) => {
                    if (err) reject({ status: 'fail', message: err })
        
                    updateRef.child(id).on('value', (snapshot) => {
                        resolve({ 
                            status: 'success', 
                            id, message: 'berhasil diupdate',
                            data: snapshot.val()
                        })
                    })
                })
            }

            return reject({
                status: 'fail', 
                message: 'id not found' 
            })
        })
    })
}

const deleteModel = function(id, collectionName) {
    const deleteRef = db.database().ref(collectionName)
    return new Promise((resolve, reject) => {   
        deleteRef.once('value', function(snapshot) {
            const detectedId = Object.keys(snapshot.val() ?? []).find(idSnap => idSnap == id)
            if (detectedId) {
                return deleteRef.child(id).remove((err) => {
                    if (err) reject({ status: 'fail', message: err })
        
                    deleteRef.child(id).on('value', (snapshot) => {
                        resolve({ 
                            status: 'success', 
                            id, 
                            message: 'berhasil dihapus'
                        })
                    })
                })
            }
            
            return reject({ 
                status: 'fail', 
                message: 'id not found' 
            })
        })
    })
}

const symptomModel = function(body) {
    const getRef = db.database().ref('disease');
    let symptoms = [];
    let total = 0;

    return new Promise((resolve, reject) => {
        getRef.once('value', (snapshot) => {
            if (snapshot.val() == undefined) {
                reject({status: 'fail', data: null})
            };
            
            const data = Object.keys(snapshot.val())
            data.forEach((dataKey, index) => {
                getRef.child(dataKey).child('symptom').once('value', (symptom) => {
                    body.filter((bodyData) => {
                        symptom.val().map((symptomFirebase, i) => {
                            if (symptomFirebase.includes(bodyData)) {
                                total++;
                            }
                            if (symptom.val().length - 1 == i) {
                                symptoms.push({total, data: dataKey})
                            }
                        })
                    })
                    total = 0;
                    if (data.length - 1 == index) {
                        resolve(symptoms)
                    }
                })
            })
        })
    })
}

const medicineModel = function (body) {
    const getRef = db.database().ref('drug')
    return new Promise((resolve, reject) => {
        body.forEach((drug) => {
            getRef.orderByChild('title').startAt(`${drug}`).endAt(`${drug}\uf8ff`)
            getRef.once('value', (snapshot) => {
                const data = [];
                snapshot.forEach(function(childSnapshot) {
                    const dataDrug = childSnapshot.val();
                    if (dataDrug.title.indexOf(drug) !== -1) {
                      data.push(dataDrug)
                    }
                });
                
                if (data.length !== 0) resolve({ status: 'success', data })
                else reject({ 
                    status: 'fail', 
                    message: 'drug not found', 
                    data: null 
                })
            })
        })
    })
}

export { 
    addModel, 
    getAllModel, 
    getDetailModel, 
    updateModel,
    deleteModel,
    symptomModel,
    medicineModel
}