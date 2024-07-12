import express from 'express'
import { createResidency, getAllResidensies, getResidency } from '../controller/residencyController.js';
const router = express.Router();

router.post("/create",createResidency)
router.get("/allres",getAllResidensies) 
router.get("/:id",getResidency)

export {router as residencyRoute}