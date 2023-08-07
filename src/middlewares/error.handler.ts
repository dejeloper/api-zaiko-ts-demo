import { Boom } from "@hapi/boom";
import { Request, Response, NextFunction } from "express";

const logErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.error(err);
  next(err);
};

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    message: err.message,
    // stack: err.stack,
  });
};

function boomErrorHandler(
  err: Boom,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.isBoom) {
    const { output } = err;
    const { payload, statusCode } = output;
    res.status(statusCode).json({
      success: false,
      data: [],
      message: payload.message,
      count: 0,
    });
  } else {
    next(err);
  }
}

export { logErrors, errorHandler, boomErrorHandler };
