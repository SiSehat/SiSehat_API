import { getDetailDrug, addObat, getAllDrug, updateDrug, deleteDrug } from '../controller/obatHandler.js';
import { addPenyakit } from '../controller/penyakitHandler.js';

const routes = [
    {
        method: 'POST',
        path: '/drug',
        handler: addObat
    },
    {
        method: 'GET',
        path: '/drug',
        handler: getAllDrug
    },
    {
        method: 'GET',
        path: '/drug/{id}',
        handler: getDetailDrug
    },
    {
        method: 'PUT',
        path: '/drug/{id}',
        handler: updateDrug
    },
    {
        method: 'DELETE',
        path: '/drug/{id}',
        handler: deleteDrug
    },
    {
        method: 'POST',
        path: '/disease',
        handler: addDisease
    },
]

export default routes;