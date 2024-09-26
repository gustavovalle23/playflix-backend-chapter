import express from 'express';
import { CustomerController } from './customer.controller';
import { registerControllers } from './register-controller';

const app = express();
registerControllers(app, [CustomerController]);

export default app;
