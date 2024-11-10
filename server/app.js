import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.js';

const app = express();
app.use(express.json());

// TODO restrict CORS later
app.use(cors());

// Routes
// start with /api/...

app.use('/api/user', userRouter);

export default app;
