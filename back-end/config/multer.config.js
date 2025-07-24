import multer from 'multer';
import firebaseStorage from 'multer-firebase-storage';

// Read service account credentials from FIREBASE_CONFIG env variable
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

// Extract credentials
const { client_email, private_key, project_id } = serviceAccount;

// Set up multer-firebase-storage
const storage = firebaseStorage({
  bucketName: 'ayush-901e4.appspot.com', // ✅ corrected bucket name
  credentials: {
    clientEmail: client_email,
    privateKey: private_key,
    projectId: project_id,
  },
  unique: true,
});

const upload = multer({ storage });

export default upload;
