import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';

const port = process.env.PORT || 3000;

// Load environment variables
dotenv.config();

const startServer = async () => {
  try {
    // Connect to MongoDB
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// TODO something about heroku was here in final project. check it out

// TODO can add test routes here

// start the server
startServer();
