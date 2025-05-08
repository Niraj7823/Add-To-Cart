const mongoose = require('mongoose');

const URL = process.env.DB_URL

const connectDb = async () => {
    try {

        await mongoose.connect(URL)
        console.log("connection is sucssesfull")
    }
    catch (error) {
        console.error("data base connection error")
        process.exit(0)
    }
}
module.exports = connectDb;