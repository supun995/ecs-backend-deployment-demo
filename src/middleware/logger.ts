import { Request, Response, NextFunction } from "express";
import { pino } from "pino";
import { v4 as uuidv4 } from "uuid";

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  formatters: {
    level: (label: string) => ({ level: label }),
  },
  timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
});

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const requestId = uuidv4();

  const startTime = Date.now();
  logger.info({
    requestId,
    method: req.method,
    path: req.url,
    status: res.status,
    latency: `${Date.now() - startTime}ms`,
  });
}

export default loggerMiddleware;
