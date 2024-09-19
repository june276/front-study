import { Schema, model } from "mongoose";

const boardSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		author: {
			type: Schema.Types.ObjectId,
			required: true,
		}
	},
	{
		timestamps: true,
	}
)

export default model('BoardSchema', boardSchema);