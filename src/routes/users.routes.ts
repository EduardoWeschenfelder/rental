import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const creteUserControler = new CreateUserController();

usersRoutes.post("/", creteUserControler.handle);

export { usersRoutes };
