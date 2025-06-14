const errormiddleware = (err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message || "backEnd Error"
    const extradetails = err.extradetails || "error from backEnd"
    return res.status(status).json({ message, extradetails })

}
module.exports = errormiddleware