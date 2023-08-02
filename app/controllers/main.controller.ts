import { Request, Response, NextFunction } from "express";

exports.mainController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // let error = new Error("Not found");
    // error.status = 500;
    // throw error;
    res
      .status(200)
      .json({ status: "success", message: "Running smoothly", data: null });
  } catch (error) {
    next(error);
  }
};
