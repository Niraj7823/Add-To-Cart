require('dotenv').config();
const express = require('express');
const router = require("./routers/auth-router")
const connectDb = require("./utils/db")
const adminrouter = require("./routers/admin-router")
const errormiddleware = require("./middleware/error-middleware")
const app = express()
const cors = require('cors')
const corsOptions = {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json())
app.use('/', router)
app.use("/admin", adminrouter)
app.use(errormiddleware)
const port = 5000
connectDb().then(() => {
    app.listen(port, () => {
        console.log("port is start...")
    })
})
