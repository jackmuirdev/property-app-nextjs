import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);;

  // If the database is already connected, dont connect again
  if (connected) {
    console.log('Database is already connected');
    return;
  }

  // Connect to the database
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true;
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;