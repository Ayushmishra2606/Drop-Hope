import express from 'express'
import upload from '../config/multer.config.js'
import auth from '../middleware/auth.js'
import Cmp from '../models/campain.module.js'
import cloudinary from '../config/cloudinary.config.js'
import streamifier from 'streamifier';

const cmpRouter = express.Router();


cmpRouter.use(express.json());
cmpRouter.use(express.urlencoded({ extended: true }));

cmpRouter.post('/upload', auth, upload.single('image'), async (req, res) => {
  const { name, title, city, description, target } = req.body;

  try {
    let imageUrl = '';

    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'campaigns',
          },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            resolve(result);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
      });

      imageUrl = result.secure_url;
    }

    const newCampaign = await Cmp.create({
      name,
      title,
      desc: description, 
      city,
      target,
      user_id: req.user.id,
      image: imageUrl,
    });

    res.status(201).json(newCampaign);
  } catch (err) {
    console.error('Error creating campaign:', err);
    res.status(500).json({ error: 'Image upload failed' });
  }
});





export default cmpRouter;