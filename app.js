import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import connect from './connect/connect.js';
import boardRouter from './routes/boardRouter.js';

const PORT = 8000;
const app = express();

connect();

app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));
app.use(cors({
  origin : `http://localhost:3000`,
  method : ['GET', 'POST', 'DELETE', 'PUT'],
  credentials : true,
}));

app.use('/board', boardRouter);

app.listen(PORT, ()=>{
	console.log(`server start on ${PORT}`);
});
