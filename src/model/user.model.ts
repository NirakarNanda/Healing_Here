import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
    email: string,
    password: string,
}

const userSchema: Schema<User> = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, 
            "Please provide a valid email address"
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
}, { timestamps: true });

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User', userSchema);

export default UserModel;