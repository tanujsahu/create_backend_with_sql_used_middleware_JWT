import express from 'express';
const router = express.Router();
import reg from './reg';

//---------- add all api ---------------
router.use('/reg', reg);

export default router 

