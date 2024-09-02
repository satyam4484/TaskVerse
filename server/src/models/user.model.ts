import {Schema, model} from "mongoose";
import userMiddleWare from "../middlewares/user.middleware.js";

export interface UserInterface {
    username:string,
    avatar:string,
    readonly email:string,
    first_name:string
    last_name:string,
    readonly created_at:Date,
    updated_at:Date,
    googleId: string,
    password:string
}

const userSchema = new Schema<UserInterface>({
    username:{type:String,required:true,unique:true},
    avatar:{type:String},
    email:{type:String,required:true,unique:true},
    first_name:{type:String,maxlength:20},
    last_name:{type:String,maxlength:20},
    created_at:{type:Date,default:Date.now(),immutable:true},
    updated_at:{type:Date,default:Date.now()},
    googleId:{type: String},
    password:{type:String}
},{ versionKey: false });


// call middlewares for data processing
userSchema.pre('save',userMiddleWare);


const User = model<UserInterface>("User",userSchema);
export default User;



