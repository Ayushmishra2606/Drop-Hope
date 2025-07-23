import multer from 'multer';
import firebaseStorage from 'multer-firebase-storage';
import serviceAccount from '../ayush-901e4-firebase-adminsdk-fbsvc-e7d273825c.json' with { type: 'json' };

// Extract credentials from serviceAccount JSON
const { client_email, private_key, project_id } = serviceAccount;

// Set up multer-firebase-storage
const storage = firebaseStorage({
  bucketName: 'ayush-901e4.firebasestorage.app',
  credentials: {
    clientEmail: client_email,
    privateKey: private_key,
    projectId: project_id,
  },
  unique: true,
});

const upload = multer({ storage });

export default upload;
