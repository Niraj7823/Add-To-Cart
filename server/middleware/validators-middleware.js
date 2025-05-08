const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {

        const err =
        {
            status: 422,
            message: "fill the input properly",
            extradetails: error.errors[0].message
        }
        next(err)
        console.log(error)
    }
};

module.exports = validate;
