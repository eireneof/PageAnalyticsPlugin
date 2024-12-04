import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { HttpStatus } from './enums/httpStatusEnum';

const rateLimiter = new RateLimiterMemory({
  points: 5, // Máximo de 5 requisições
  duration: 600, // 10 minutos
});

export const limitRequests = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.toString()?.trim() as string;
    await rateLimiter.consume(token);
    next();
  } catch (error) {
    res
      .status(HttpStatus.TOO_MANY_REQUESTS)
      .json({ message: 'Too many requests', error: error });
  }
};
