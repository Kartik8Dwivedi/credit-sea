import express from "express";
import validateXML from "../../Middlewares/ValidateXML.js";
import MainController from "../../Controllers/main.controller.js";
import upload from "../../Utils/uploads.js";

const router = express.Router();
const controller = new MainController();

router.get("/", (req, res) => {
  res.send(`<h1>Server is up and running!</h1>`);
});

router.post("/upload", upload.single("file"), validateXML, controller.upload);
router.get("/reports", controller.getAllReports);
router.get("/reports/:id", controller.getReportById);

/*

TODO Routes

router.post('/reports');
router.get('/reports:id');

*/

export default router;
