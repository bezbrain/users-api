const connectDB = require("./db/connect");

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// Import router for all routes
const peopleRouter = require("./routers/people.router");

const port = 3000;

// Invoking cors library for frontend free access
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use("/api/people", peopleRouter);

const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startDB();
