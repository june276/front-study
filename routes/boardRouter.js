import express from 'express';
import { find, list, remove, update, write } from '../controllers/boardController.js';

const boardRouter = express.Router();	

boardRouter.get('/posts', list);
boardRouter.get('/posts/:id', find);
boardRouter.post('/create', write);
boardRouter.put('/update', update);
boardRouter.delete('/delete', remove);

export default boardRouter;