import mongoose from "mongoose";

const password ="1234";
const connectURL = `mongodb+srv://app:${password}@app.retr5ep.mongodb.net/?retryWrites=true&w=majority&appName=app`;

const connect = () =>{
	if (process.env.NODE_ENV !== 'production') {
		mongoose.set('debug', true)
	}

	mongoose.connect(connectURL, {
		dbName: "datas"
	}).then(()=>{
		console.log('Connected to MongoDB')
	}).catch((err)=> {
		console.log('fail to connect MongoDB')
		console.error(err);
	})
}

export default connect;