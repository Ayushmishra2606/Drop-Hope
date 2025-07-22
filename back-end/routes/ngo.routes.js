import express from 'express';
import Ngo from '../models/ngo.model.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import cors from 'cors';

const NGOrouter = express.Router();

NGOrouter.use(cors());
NGOrouter.use(express.json());

NGOrouter.post( '/register', async (req, res) => {
    const { username, email, password, role, fieldOfWork , city, area } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const existingNgo = await Ngo.findOne({ email });
        if (existingNgo) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newNgo = await Ngo.create({
            username,
            email,
            password: hashedPassword,
            role,
            category: fieldOfWork,
            city,
            area
        });

        res.status(201).json({ message: 'NGO registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Sign-up Failed' });
    }
});

export default NGOrouter;
    
    
