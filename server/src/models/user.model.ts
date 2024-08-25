import {Schema, model} from "mongoose";
import userMiddleWare from "../middlewares/user.middleware.js";

export interface UserInterface {
    username:string,
    avatar:string,
    readonly email:string,
    first_name:string
    last_name:string,
    contact_no?:string,
    readonly created_at:Date,
    updated_at:Date,
    password:string
}

const userSchema = new Schema<UserInterface>({
    username:{type:String,required:true,unique:true},
    avatar:{type:String},
    email:{type:String,required:true,unique:true},
    first_name:{type:String,maxlength:20},
    last_name:{type:String,maxlength:20},
    contact_no:{type:String,maxlength:11},
    created_at:{type:Date,default:Date.now(),immutable:true},
    updated_at:{type:Date,default:Date.now()},
    password:{type:String,required:true}
},{ versionKey: false });


// call middlewares for data processing
userSchema.pre('save',userMiddleWare);


const User = model<UserInterface>("User",userSchema);
export default User;



