export interface IErrorMiddleware {
  errCode: number;
  errMessage: string;
}

export default (err, req, res, next) => {
  if (err.errMessage) {
    err.errCode
      ? res
          .status(err.errCode)
          .send({ success: false, message: err.errMessage })
      : res.status(500).send({ success: false, message: err.errMessage });
    next();
  } else {
    res.status(500).send({
      message: "Unknown Error or Internal Server Error",
      success: false,
    });
  }
};
