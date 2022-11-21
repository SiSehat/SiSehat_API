import express from "express";
import { addObat, getDetailDrug } from "../controller/obatHandler.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.status(200);
  res.send({
    message: "Hello World",
  });
});

// obat
router.post("/drug", addObat);
router.get("/drug/:id", getDetailDrug);
// router.get('/drugs', )

export default router;
