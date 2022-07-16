import mongoose from "mongoose";
import User from "../models/user.js";
import jwt from 'jsonwebtoken';

export const getUsers = async (req, res) => {  //async : asynchrone
    try {
        const us = await User.find(); //yjibli la liste des categories
        res.status(200).json(us);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const { name, telephone, email, password, register_date } = req.body;
    const newUser = new User({ name: name, telephone: telephone, email: email, password: password, register_date: register_date })
    try {
        await newUser.save();
        res.status(201).json(newUser);  //200 w ila 201 c kifkif
    }
    catch (error) {
        res.status(409).json({ message: error.message });  //404 ou 409 c kifkif
    }
}

const generateAccessToken = (user) => {
    return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800' });
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de user avec l'ID: ${id}`);
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully." });
}

export const getUserByID = async (req, res) => {
    try {
        const us = await User.findById(req.params.id);   //
        res.status(200).json(us);  //200 w ila 201 c kifkif
    }
    catch (error) {
        res.status(404).json({ message: error.message });  //404 ou 409 c kifkif
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, telephone, email, password, register_date } = req.body;
    //if(! mongoose.Types.objectID.isValid(id)) return res.status(404).send(`pas de cztegorie avec un id : ${id}`);
    const us1 = {
        name: name, telephone: telephone, email: email, password: password, register_date: register_date, _id: id
    };
    await User.findByIdAndUpdate(id, us1);
    res.json(us1);
}

export const getuserBYEmail = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.find({ email, password });
        if (user == "") {
            res.status(401).send("utilsateur non existant");
            return;
        }
        const accesToken = generateAccessToken(user);
        res.status(200).json({
            accesToken
        })
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}