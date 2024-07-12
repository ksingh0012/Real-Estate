import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';


// function to create user
const createUser = asyncHandler(async (req, res) => {
    console.log("creating a user");

    let { email } = req.body;

    const userExist = await prisma.user.findUnique({ where: { email: email } })

    if (!userExist) {
        const user = await prisma.user.create({ data: req.body });
        res.send({
            message: "User Registered Successfully",
            user: user
        });
    }
    else {
        res.status(201).send({ message: "User already exists" });
    }
});

// fucntion to book a visit 

const bookvisit = asyncHandler(async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params

    try {

        const alreadyBooked = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        })


        if (!alreadyBooked) {
            return res.status(404).json({ message: "User not found" });
        }

        if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
            res.status(400).json({ message: "This residency is already booked by you" });
        }
        else {
            await prisma.user.update({
                where: { email: email },
                data: {
                    bookedVisits: { push: { id, date } }
                }
            })
        }
        res.send("Your visit is booked successfully");

    } catch (err) {
        throw new Error(err.message);
    }
});

//function to get all the bookings
const getAllBookings = asyncHandler(async (req, res) => {
    const { email } = req.body;

    try {
        const booking = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        })

        res.status(200).send(booking);
    } catch (err) {
        throw new Error(err.message);
    }
});

//function to cancel the booking

const cancelBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        })

        const index = user.bookedVisits.findIndex((visit) => visit.is === visit)

        if (index === -1) {
            res.status(404).json({ message: "Booking not Found" })
        }
        else {
            user.bookedVisits.slice(index, 1)
            await prisma.user.update({
                where: { email: email },
                data: {
                    bookedVisits: user.bookedVisits
                }
            })
            res.send("Booking cancelled")
        }

    } catch (err) {
        res.send(err.message);
    }


});

// function to add residency in favourite

const favouriteResidency = asyncHandler(async (req, res) => {

    const { email } = req.body;
    const { rid } = req.params;

    try {

        const user = await prisma.user.findUnique({
            where: { email: email }
        })

        if (user.favResidenciesID.includes(rid)) {
            const updateUser = await prisma.user.update({
                where: { email: email },
                data: {
                    favResidenciesID: {
                        set: user.favResidenciesID.filter((id) => id !== rid)
                    }
                }
            })
            res.send({ message: "Removed from favourities", user: updateUser })
        }
        else {
            const updateUser = await prisma.user.update({
                where: { email: email },
                data: {
                    favResidenciesID: {
                        push: rid
                    }
                }
            })
            res.send({ message: "Added to Favourities", user: updateUser });
        }

    } catch (err) {
        throw new Error(err.message)
    }
});

// function to return all favourite residensies
const getAllFav = asyncHandler(async(req,res)=>{
    const {email} =req.body;
    
    try{
        const favRes = await prisma.user.findUnique({
            where : {email:email},
            select : {favResidenciesID : true}
        })
        res.status(200).send(favRes);
    }catch(err){
        throw new Error(err.message);
    }

});

export { createUser, bookvisit, getAllBookings, cancelBooking, favouriteResidency ,getAllFav};