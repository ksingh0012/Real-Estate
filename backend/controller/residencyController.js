import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js"


const createResidency = asyncHandler(async (req, res) => {

    const { title, description, price, address, country, city, facilities, image, userEmail } = req.body.data;

    console.log(req.body.data)

    try {

        const residency = await prisma.residensies.create({
            data: { title, description, price, address, country, city, facilities, image, owner: { connect: { email: userEmail } } }
        })
        res.send({ message: "Residency created successfully", residency })
    }
    catch (err) {
        if (err.code === "P2002") {
            throw new Error("A residency already exists");
        }
        else {
            throw new Error(err.message);
        }
    }
});


// function to get all the residensies
const getAllResidensies = asyncHandler(async (req, res) => {
    const residency = await prisma.residensies.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
    res.send(residency);
});

// function to get specific residency
const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const residency = await prisma.residensies.findUnique({
            where: { id: id }
        })
        res.send(residency)

    } catch (err) {
        throw new Error(err.message);
    }
});

export { createResidency, getAllResidensies, getResidency }