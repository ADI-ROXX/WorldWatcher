import express from 'express';
import {searchNews} from '../controller/searchNews.js';
const router = express.Router();

router.post('/search',searchNews);  // whenever /signup is called and data is being sent by post,



export default router;