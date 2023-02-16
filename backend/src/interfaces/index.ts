export interface User {
    email : {
        type : string
        required : [boolean, string],
        unique : boolean,
        lowercase: boolean,
        validate: [boolean, string]
    },

    password : {
        type : string,
        required : [boolean, string],
        minlenght: [number, string]
    }
}