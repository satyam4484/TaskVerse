import {Schema, model} from "mongoose";
import dashboardValidationSchema from "../validators/dashboard.validator.js";

export interface DashboardInterface {
    name: string;
    description: string;
    user: Schema.Types.ObjectId; // Use ObjectId type for user reference
}

// Define the Mongoose schema for Dashboard
const DashboardSchema = new Schema<DashboardInterface>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true } // Reference to User model
}, { versionKey: false });



// Pre-save middleware to validate the document
DashboardSchema.pre("save", async function (next) {
    try {
        // Access the current document being saved
        const dashboard = this as DashboardInterface;

        // Validate the document against the yup schema
        await dashboardValidationSchema.validate(dashboard, { abortEarly: false });

        // Continue to the next middleware or save operation
        next();
    } catch (error) {
        // Pass validation errors to Mongoose's error handler
        next(error);
    }
});

const Dashboard = model<DashboardInterface>('Dashboard', DashboardSchema);

export default Dashboard;

