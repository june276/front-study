import mongoose from "mongoose";
import dotenv from 'dotenv';

const connect = () =>{
	dotenv.config();
	if (process.env.NODE_ENV !== 'production') {
		mongoose.set('debug', true)
	}

	mongoose.connect(process.env.DB_URL, {
		dbName: "datas"
	}).then(()=>{
		console.log('Connected to MongoDB')
	}).catch((err)=> {
		console.log('fail to connect MongoDB')
		console.error(err);
	})
}

export default connect;