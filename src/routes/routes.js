import { sympthomHandler, medicineByHandler } from "../controller/gejalaHandler.js";
import findNearestHospital from "../controller/hospotalHandler.js";
import { notFoundHandler, rootHandler } from '../controller/notFoundHandler.js'
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
import { login, register } from "../controller/userHandler.js";

const routes = [
  {
    method: "*",
    path: "/{any*}",
    handler: notFoundHandler,
  },
  {
    method: "GET",
    path: "/",
    handler: rootHandler,
  },
  {
    method: "POST",
    path: "/register",
    handler: register,
  },
  {
    method: "POST",
    path: "/login",
    handler: login,
  },
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
  {
    method: "POST",
    path: "/sympthom",
    handler: sympthomHandler,
  },
  {
    method: "POST",
    path: "/medicine",
    handler: medicineByHandler,
  },
  {
    method: "GET",
    path: "/hospitals",
    handler: findNearestHospital,
  },
];

export default routes;
