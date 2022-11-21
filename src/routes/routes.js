import { getDetailDrug, addObat } from '../controller/obatHandler.js';

const routes = [
    {
        method: 'POST',
        path: '/drug',
        handler: addObat
    },
    {
        method: 'GET',
        path: '/drug/{id?}',
        handler: getDetailDrug
    }
]

export default routes;