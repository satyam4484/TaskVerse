import * as yup from "yup";
import { Schema } from "mongoose";
import { DashboardInterface } from "../models/dashboard.model.js"; // Adjust the path as necessary

const objectIdRegex = /^[0-9a-fA-F]{24}$/; // Regex for MongoDB ObjectId

const dashboardValidationSchema: yup.ObjectSchema<Omit<DashboardInterface, 'user'> & { user: string }> = yup.object().shape({
    name: yup.string()
        .min(3, 'Name must be at least 3 characters long')
        .max(100, 'Name cannot exceed 100 characters')
        .required('Name is required'),
    description: yup.string()
        .min(10, 'Description must be at least 10 characters long')
        .max(500, 'Description cannot exceed 500 characters')
        .required('Description is required'),
    user: yup.string()
        .matches(objectIdRegex, 'Invalid user ID format')
        .required('User ID is required')
});

// Cast the validated user ID string to an ObjectId when needed
dashboardValidationSchema.cast = (value) => ({
    ...value,
    user: new Schema.Types.ObjectId(value.user) // Cast user to ObjectId
});

export default dashboardValidationSchema;