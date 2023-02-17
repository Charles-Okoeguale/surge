import mongoose, { Schema } from 'mongoose';


 export const googleuserSchema = new Schema({
    email: {
        type: String
    },
    password:{
        type: Number
    }
 })

 export const userSchema = new Schema({
    username:{
        type: String
    },

    email:{
        type: String
    },

    password:{
        type: Number
    }
})

export const googleModel = mongoose.model("googleusers", googleuserSchema)
export const userModel = mongoose.model("users", userSchema)