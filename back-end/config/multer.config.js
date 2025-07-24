import multer from 'multer';
import firebaseStorage from 'multer-firebase-storage';
import dotenv from 'dotenv';
dotenv.config();
// Read service account credentials from FIREBASE_CONFIG env variable
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

// Extract credentials
const { client_email, private_key, project_id } = serviceAccount;

// Set up multer-firebase-storage
const storage = firebaseStorage({
  bucketName: 'ayush-901e4.appspot.com', // ✅ corrected bucket name
  credentials: {
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // handle newline chars
    projectId: process.env.FIREBASE_PROJECT_ID,
  },
  unique: true,
});

const upload = multer({ storage });

export default upload;
