const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/mongo"); // Initiate MongoDB Connection

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Incoming req: ${req.method} ${req.url}`);
    next();
});

const authRoutes = require("./routes/authRoutes");
const generateRoutes = require("./routes/generateRoutes");
const postsRoutes = require("./routes/postsRoutes");

app.use("/auth", authRoutes);
app.use("/generate", generateRoutes);
app.use("/posts", postsRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Content Generator app is live on port ${PORT}`);
});
