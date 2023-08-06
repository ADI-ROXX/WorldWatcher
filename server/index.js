import express from 'express';
import router from './router/routes.js';
import cors from "cors";


const app = express();

import bodyParser from 'body-parser';
const jsonParser = bodyParser.json({extended: true,limit:"50mb"});

app.use(jsonParser); // use it globally
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/',router) ; 

const PORT=process.env.PORT||8000;

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});


