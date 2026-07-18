import { Router } from 'express';
import { AuthService } from '../application/services/AuthService';
import { AuthController } from '../controllers/AuthController';
import { memoryStore } from '../data/memoryStore';
import { DemoJwtTokenFactory } from '../infrastructure/auth/DemoJwtTokenFactory';
import { DemoPasswordHasher } from '../infrastructure/auth/DemoPasswordHasher';

export const authRouter = Router();
export const tokenFactory = new DemoJwtTokenFactory(memoryStore.users);

const service = new AuthService(memoryStore.users, new DemoPasswordHasher(), tokenFactory);
new AuthController(service).register(authRouter);
