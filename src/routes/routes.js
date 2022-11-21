import { getDetailDrug, addObat, getAllDrug, updateDrug, deleteDrug } from '../controller/obatHandler.js';

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
]

export default routes;