import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
	{
		post_id: {
			type: Schema.Types.ObjectId,
			ref: "BoardSchema",
			required: true,
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: "UserSchema",
			required: true,
		},
		content: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true,
	}
);

export default model("CommentSchema", commentSchema);