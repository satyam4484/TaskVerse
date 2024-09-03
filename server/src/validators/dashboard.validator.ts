import * as yup from "yup";
import { dashboardInterface } from "../models/dashboard.model.js"; // Adjust the path as necessary

const dashboardValidationSchema: yup.ObjectSchema<dashboardInterface> = yup.object().shape({
    name: yup.string()
        .min(3, 'Name must be at least 3 characters long')
        .max(100, 'Name cannot exceed 100 characters')
        .required('Name is required'),
    description: yup.string()
        .min(10, 'Description must be at least 10 characters long')
        .max(500, 'Description cannot exceed 500 characters')
        .required('Description is required')
});

export default dashboardValidationSchema;