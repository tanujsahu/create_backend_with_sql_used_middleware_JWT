import express from 'express';
const router = express.Router();
import { create, getAll, login, update } from '../controllers/reg';

//--------- add all api url with controller- -----------
router.get('/', create);
router.get('/getAll', getAll);
router.get('/login', login);
router.post('/update', update);

export default router

