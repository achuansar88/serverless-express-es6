
import { Router } from 'express';
import User from './user';

const routes = Router();
const user = new User();

routes.post('/',user.getUser);

export default routes;
