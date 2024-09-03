import express from 'express';
import { createDashboard, getAllDashboards, getDashboardById, updateDashboard, deleteDashboard } from "../controllers/dashboard.controller.js"

const router = express.Router();

router.post('/', createDashboard);
router.get('/', getAllDashboards);
router.get('/:id', getDashboardById);
router.put('/:id', updateDashboard);
router.delete('/:id', deleteDashboard);

export default router;