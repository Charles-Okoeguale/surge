import mongoose from 'mongoose'


export const googleuser : any = {
    email : String,
    password : Number
}

export const googleModel = mongoose.model("googleusers", googleuser)