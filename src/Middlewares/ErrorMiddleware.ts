export default (err, req, res, next) => {
  if (err.errMessage) {
    res.send({ success: false, message: err.errMessage });
  }
};
