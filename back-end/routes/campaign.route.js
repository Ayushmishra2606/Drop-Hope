import express from 'express'
import upload from '../config/multer.config.js'
import auth from '../middleware/auth.js'
import Cmp from '../models/campain.module.js'
import { getStorage } from "firebase-admin/storage";

const cmpRouter = express.Router();


cmpRouter.use(express.json());
cmpRouter.use(express.urlencoded({ extended: true }));

cmpRouter.post('/upload' , auth , upload.single('image') , async(req , res) =>{
    const {name , title , city , description , target ,} = req.body;
    try {
        const newCpn = await Cmp.create({
            name,
            title,
            city,
            desc:description,
            target,
            user_id: req.user.id,
            image: req.file.path
        })
    } catch (error) {
        res.status(500).json({ message: "Coundn't Start a Campaign , Try again later " });
    }
})


export default cmpRouter;