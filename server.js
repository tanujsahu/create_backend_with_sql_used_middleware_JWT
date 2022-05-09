import express from 'express';
import bodyParser from "body-parser";
import router from './routes/index.js';
import { generateJWT, verifyJWT } from './utils/jwt'
import 'dotenv/config'
import cors from "cors";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json())
const port = process.env.P0RT || 3000;
app.use(cors({ origin: ['*'] }));

//-------------- jwt Middleware -------------------
const jwtMiddleware = (req, res, next) => {
    if (req.body.token) {
        let data = verifyJWT(req.body.token)
        req.body.id = data.id;
    }
    next();
}

//------------ router ----------------------------
app.use('/api', jwtMiddleware, router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})