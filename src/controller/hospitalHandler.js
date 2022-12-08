import faskes from '../../data/FaskesBPJS.js';
import generateRandomInteger from '../utils/generateRandomNumber.js';
import isNegative from '../utils/isNegative.js';

const findNearestHospital = (request, h) => {
    const { latlng } = request.query; // location user
    let response = null

    try {
        // 1.23131,1.3133
        const latlngToArray = latlng.split(',');
        latlngToArray[0] = parseFloat(latlngToArray[0])
        latlngToArray[1] = parseFloat(latlngToArray[1])
        const nearHospitals = [];
        // console.log(latlngToArray[0] / 1.05);
        // console.log(latlngToArray[0]);

        faskes.map((hospital) => {
            const latlng = hospital.LatLongFaskes.replace('http://maps.google.co.id/?q=', '').split(',')
            latlng[0] = parseFloat(latlng[0])
            latlng[1] = parseFloat(latlng[1])

            if (latlng.length === 1) return // ["-"] 
            // console.log(latlng[0] , hospital.NamaFaskes);            
            // ["1.121", "1.131"]
            // east indonesia

            if (latlngToArray[0] / 1.001 >= latlng[0] && latlngToArray[0] * 1.0000921 <= latlng[0] && latlngToArray[1] * 1.00058 >= latlng[1] && latlngToArray[1] / 1.00031 <= latlng[1] && isNegative(latlngToArray[0])) {
                nearHospitals.push(hospital)
            }

            // weast indonesia
            if (latlngToArray[0] * 1.08 >= latlng[0] && latlngToArray[0] <= latlng[0] && latlngToArray[1] * 1.01 >= latlng[1] && latlngToArray[1] <= latlng[1] && isNegative(latlngToArray[0]) === false) {
                nearHospitals.push(hospital)
            }
        })

        response = h.response({
            status: 'success',
            hospital: nearHospitals
        })
        response.code(200)

        return  response
    } catch (error) {
        console.log(error);

        response = h.response({
            status: 'fail',
            error: true,
            message: error.message
        })
    }
}

const findRandomHospital = (request, h) => {
    let response = null;
    try {

        const hospital = [];
        for (let index = 0; index < 10; index++) {
            hospital.push(faskes[generateRandomInteger(50, 19000)])
        }

        response = h.response ({
            status: 'success',
            hospital: hospital   
        })

        return response;
    } catch (error) {
        console.log(error);
        response = h.response({
            status: 'fail',
            error: true,
            message: error.message
        })
    }
}

export { findNearestHospital, findRandomHospital }