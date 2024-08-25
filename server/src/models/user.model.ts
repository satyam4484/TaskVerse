import {ObjectId, Schema, model} from "mongoose";

export interface UserInterface {
    username:string,
    avatar:string,
    readonly email:string,
    first_name:string
    last_name:string,
    contact_no?:string,
    created_at:Date,
    updated_at:Date
}

