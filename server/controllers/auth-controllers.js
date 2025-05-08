const bcrypt = require("bcryptjs")
const user = require('../model/user-model')
const Contact = require('../model/contact-model')
const home = async (req, res) => {
        res.send("helloe every one this is home page:")
}
const login = async (req, res) => {
        try {
                const { email, password } = req.body;

                // Check if user exists
                const userExists = await user.findOne({ email: email });
                if (!userExists) {
                        return res.status(400).json({ message: "Invalid email" });
                }

                // Compare passwords
                const passwordMatch = await bcrypt.compare(password, userExists.password);
                if (!passwordMatch) {
                        return res.status(401).json({ message: "Invalid  password" });
                }

                // Send success response
                res.status(200).json({
                        message: "Login successful",
                        token: await userExists.generateToken(),
                        userID: userExists._id.toString(),
                });

        } catch (error) {
                res.status(500).json({ message: "Internal server error" });
        }
};


const registor = async (req, res) => {

        try {

                const { email, userName, password, phone } = req.body
                const userExit = await user.findOne({ email: email })
                if (userExit) {
                        return res.status(400).json({ message: "user already exit" })
                }
                const set_password = await bcrypt.hash(password, 10)
                const userCreate = await user.create({ email, userName, password: set_password, phone })
                res.json({

                        token: await userCreate.generateToken(),
                        userID: userCreate._id.toString()
                });

        }
        catch (error) {
                res.json({ massage: error })
        }

}

const contact = async (req, res) => {
        try {
                const { email, message } = req.body;

                if (!email || !message) {
                        return res.status(400).json({ message: "Email and message are required" });
                }

                // Create new contact entry in MongoDB
                const userCreate = await Contact.create({ email, message });

                res.status(201).json({ message: "User successfully created", details: userCreate.message });
        } catch (error) {
                console.error("Error:", error);
                res.status(500).json({ message: "Internal Server Error" });
        }
};


const userres = async (req, res) => {


        try {
                const userData = req.user
                res.json({ userData })
        }

        catch (error) {
                console.log({ "error": error })
        }
}

module.exports = { home, registor, login, contact, userres }
