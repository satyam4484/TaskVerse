import * as yup from "yup";
import { UserInterface } from "../models/user.model.js";

const userValidationSchema: yup.ObjectSchema<UserInterface> = yup.object().shape({
        username: yup.string()
                .min(3, 'Username must be at least 3 characters long')
                .max(30, 'Username cannot exceed 30 characters')
                .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers')
                .required('Username is required'),
        avatar: yup.string()
                .url('Avatar must be a valid URL'),
        email: yup.string()
                .email('Please provide a valid email address')
                .required('Email is required'),
        first_name: yup.string()
                .max(20, 'First name cannot exceed 20 characters')
                .matches(/^[a-zA-Z]+$/, 'First name can only contain letters'),
        last_name: yup.string()
                .max(20, 'Last name cannot exceed 20 characters')
                .matches(/^[a-zA-Z]+$/, 'Last name can only contain letters'),
        created_at: yup.date()
                .default((): Date => new Date())
                .required('Created at is required'),
        updated_at: yup.date()
                .default((): Date => new Date())
                .required('Updated at is required'),
        googleId: yup.string(),
        password: yup.string()
                // .min(8, "Password must be at least 8 characters long")
                // .max(20, "Password must be at most 20 characters long")
                // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                // .matches(/[0-9]/, "Password must contain at least one digit")
                // .matches(/[\W_]/, "Password must contain at least one special character")
});

export default userValidationSchema;
