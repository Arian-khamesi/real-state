import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        minLength: 2
    },
    email: {
        type: String,
        required: true,
        minLength: 10
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "USER"
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
})

const User = models.User || model("User", userSchema)

export default User;