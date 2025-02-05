import express from 'express';
import multer from 'multer';
import validateXML from '../../Middlewares/ValidateXML.js';
import MainController from '../../Controllers/main.controller.js';

const router = express.Router();
const upload = multer({ dest: "uploads/" });
const controller = new MainController();

router.get('/', (req, res) => {
    res.send(`<h1>Server is up and running!</h1>`);
});

router.post(
    '/upload', 
    upload.single('file'),
    validateXML,
    controller.upload
);

/*

TODO Routes

router.post('/extract');
router.post('/reports');
router.get('/reports:id');

*/

export default router; 