import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/appError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;

}

async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing!", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const { sub: user_id } = verify(token, "fdb758aa93edca6644d43d92805b1567") as IPayload;

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new AppError("User does not exists!", 401)
    }

    req.user =
      { id: user_id }

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}

export { ensureAuthenticated };
