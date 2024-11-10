import express from 'express';
import dotenv from 'dotenv';
import app from './app.js';

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // TODO add connection to database
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
