import { Request, Response, NextFunction } from "express";

module.exports = function (err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err?.stack);
  if (err?.status != 500) {
    return res?.status(err?.status).json({
      status: "error",
      message: "Oops, an err occurred",
      data: err,
    });
  }
  res?.status(500).json({
    status: "error",
    message: "Oops, an internal server error has occurred",
    data: err,
  });
};
