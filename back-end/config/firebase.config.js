import Firebase from 'firebase-admin'

import serviceAccount from '../ayush-901e4-firebase-adminsdk-fbsvc-e7d273825c.json' with { type: 'json' };

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket : 'ayush-901e4.firebasestorage.app'
})

export default Firebase;