const adminmiddkeware = (req, res, next) => {

    try {

        const adminRoal = req.user.isAdmin;
        if (!adminRoal) {
            res.json({ "message": "user not a admin" })
        }

        next();
    }
    catch (error) {

        next(error)
    }
}
module.exports=adminmiddkeware