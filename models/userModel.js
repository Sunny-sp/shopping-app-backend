import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = Schema({
    username:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;
