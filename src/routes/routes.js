import {
  getDetailDrug,
  addObat,
  getAllDrug,
  updateDrug,
  deleteDrug,
} from "../controller/obatHandler.js";
import {
    addDisease,
  deleteDisease,
  getAllDisease,
  getDetailDisease,
  updateDisease,
} from "../controller/penyakitHandler.js";

const routes = [
  {
    method: "POST",
    path: "/drug",
    handler: addObat,
  },
  {
    method: "GET",
    path: "/drug",
    handler: getAllDrug,
  },
  {
    method: "GET",
    path: "/drug/{id}",
    handler: getDetailDrug,
  },
  {
    method: "PUT",
    path: "/drug/{id}",
    handler: updateDrug,
  },
  {
    method: "DELETE",
    path: "/drug/{id}",
    handler: deleteDrug,
  },
  {
    method: "POST",
    path: "/disease",
    handler: addDisease,
  },
  {
    method: "GET",
    path: "/disease",
    handler: getAllDisease,
  },
  {
    method: "GET",
    path: "/disease/{id}",
    handler: getDetailDisease,
  },
  {
    method: "PUT",
    path: "/disease/{id}",
    handler: updateDisease,
  },
  {
    method: "DELETE",
    path: "/disease/{id}",
    handler: deleteDisease,
  },
];

export default routes;
