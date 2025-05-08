const user = require('../model/user-model')
const Contact = require('../model/contact-model')
const getUser = async (req, res, next) => {
    try {
        const userData = await user.find({}, { "password": 0 })

        if (!userData || userData.length === 0) {
            res.json({ "message": "user does not found" })
        }
        res.json(userData)
    }
    catch (error) {
        next(error)
    }

}

const userDelete = async (req, res, next) => {
    try {

        const id = req.params.id;
        await user.deleteOne({ _id: id });
        res.json({ "message": "user delete sucssesfully" })
    }
    catch (error) {

        next(error)
    }
}
const userContactDelete = async (req, res, next) => {
    try {

        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        res.json({ "message": "user contact delete sucssesfully" })
    }
    catch (error) {

        next(error)
    }
}
const getContact = async (req, res, next) => {

    try {
        const userData = await Contact.find()

        if (!userData || userData.length === 0) {
            res.json({ "message": "contact data does not found" })
        }
        res.json(userData)
    }
    catch (error) {
        next(error)
    }
    
}

const getUserId = async (req, res, next) => {


    try {
        const id = req.params.id
        const userData = await user.findOne({ _id: id },{password:0})
        res.json(userData)
    }
    catch (error) {

        next(error)
    }


}
const updateData =async(req,res,next)=>{

    try{
        
        const id = req.params.id
        const data = req.body
        const updateUser = await user.updateOne({_id:id},{
            $set:data
        })
        res.json(updateUser)
    }
    catch(error)
    {
        next(error)
    }
}
module.exports = { getUser, getContact, userDelete, getUserId ,updateData,userContactDelete}
