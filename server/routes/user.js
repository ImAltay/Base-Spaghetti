import express from 'express';
import { getUsers, createUser } from '../controllers/user.js';
import authMiddleware from '../middleware/auth.js';
import roleMiddleware from '../middleware/role.js';

const userRouter = express.Router();

userRouter.get(
  '/',
  authMiddleware,
  roleMiddleware(['admin', 'moderator']),
  getUsers
);
userRouter.post('/', createUser);

export default userRouter;
