import express from 'express';
import { createUser, bookvisit, getAllBookings, cancelBooking, favouriteResidency, getAllFav } from '../controller/userController.js';

const router = express.Router();

router.post("/register", createUser)
router.post("/bookvisit/:id", bookvisit)
router.post("/allBookings", getAllBookings)
router.post("/cancel/:id", cancelBooking)
router.post("/favourite/:rid", favouriteResidency)
router.post("/allFav", getAllFav)
export { router as userRoute }