const express = require("express");
const router = require("./routers/auth-router");
const adminrouter = require("./routers/admin-router");
const errormiddleware = require("./middleware/error-middleware");
const connectDb = require("./utils/db");
const cors = require("cors");

const app = express();

// CORS setup
const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
app.use("/admin", adminrouter);
app.use(errormiddleware);

// Don't use app.listen on Vercel
// Instead, export the handler

// Connect DB once before exporting
connectDb();

module.exports = app;
