import mongoose from "mongoose";
import bycrpt from "bcrypt";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password= await bycrpt.hash(this.password,10);
    next()
})

userSchema.methods.isPasswordCorrect= async function(password) {
    return await bycrpt.compare(password,this.password)
}
export const User = mongoose.model("User",userSchema)