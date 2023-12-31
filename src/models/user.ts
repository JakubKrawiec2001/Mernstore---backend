import { Schema, model } from "mongoose";

export interface IUser {
	_id?: string;
	username: string;
	password: string;
	
}

const UserSchema = new Schema<IUser>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});


export const UserModel = model<IUser>("user", UserSchema)