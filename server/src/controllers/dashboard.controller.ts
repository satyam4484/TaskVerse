import { Request, Response } from "express";
import Dashboard, { DashboardInterface } from "../models/dashboard.model.js";
import { sendResponse } from "../utils/responseHelper.js";

// Create a new dashboard
export const createDashboard = async (req: Request, res: Response) => {
    try {
        const dashboardData: DashboardInterface = req.body;
        const newDashboard = new Dashboard(dashboardData);
        await newDashboard.save();
        return sendResponse(res, 201, "Dashboard created successfully.", newDashboard);
    } catch (error) {
        return sendResponse(res, 400, "Error creating dashboard", null, error);
    }
};

// Get all dashboards
export const getAllDashboards = async (req: Request, res: Response) => {
    try {
        const dashboards = await Dashboard.find();
        return sendResponse(res, 200, "Dashboards retrieved successfully.", dashboards);
    } catch (error) {
        return sendResponse(res, 400, "Error retrieving dashboards", null, error);
    }
};

// Get a single dashboard by ID
export const getDashboardById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const dashboard = await Dashboard.findById(id);
        if (dashboard) {
            return sendResponse(res, 200, "Dashboard retrieved successfully.", dashboard);
        }
        return sendResponse(res, 404, "Dashboard not found.");
    } catch (error) {
        return sendResponse(res, 400, "Error retrieving dashboard", null, error);
    }
};

// Update a dashboard by ID
export const updateDashboard = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedDashboard = await Dashboard.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (updatedDashboard) {
            return sendResponse(res, 200, "Dashboard updated successfully.", updatedDashboard);
        }
        return sendResponse(res, 404, "Dashboard not found.");
    } catch (error) {
        return sendResponse(res, 400, "Error updating dashboard", null, error);
    }
};

// Delete a dashboard by ID
export const deleteDashboard = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedDashboard = await Dashboard.findByIdAndDelete(id);
        if (deletedDashboard) {
            return sendResponse(res, 200, "Dashboard deleted successfully.", deletedDashboard);
        }
        return sendResponse(res, 404, "Dashboard not found.");
    } catch (error) {
        return sendResponse(res, 400, "Error deleting dashboard", null, error);
    }
};