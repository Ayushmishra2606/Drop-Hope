import mongoose from 'mongoose';

function connectDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('DataBase connected successfully');
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
    });
}

export default connectDB;