import express from 'express';
import {
    checkAvailabilityAPI,
    createBooking,
    getHotelBookings,
    getUserBookings,
    stripePayment,
    verifyPayment
} from '../controllers/bookingController.js';
import protect, { requireOwner } from '../middleware/authMiddleware.js';

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailabilityAPI);
bookingRouter.post('/book', protect, createBooking);
bookingRouter.get('/user', protect, getUserBookings);
bookingRouter.get('/hotel', protect, requireOwner, getHotelBookings);
bookingRouter.post('/stripe-payment', protect, stripePayment);
bookingRouter.post('/verify', protect, verifyPayment);


export default bookingRouter;