import multer from 'multer';
import firebaseStorage from 'multer-firebase-storage';
import dotenv from 'dotenv';
dotenv.config();

// Set up multer-firebase-storage
const storage = firebaseStorage({
  bucketName: 'ayush-901e4.appspot.com',
  credentials: {
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    projectId: process.env.FIREBASE_PROJECT_ID,
  },
  unique: true,
});

const upload = multer({ storage });

export default upload;
