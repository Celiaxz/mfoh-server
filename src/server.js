require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
// const functions = require("firebase-functions");
const app = express();
// const bodyParser = require("body-parser");
const router = require("./routes");

const port = process.env.PORT || 5000;
const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173";
//Parse incoming requests with JSON payloads
// app.use(bodyParser.json());

//Use the "cors" middleware to enable CORS
app.use(
  cors({
    origin: [FRONTEND_URL],
  })
);

// Middleware for parsing JSON requests
app.use(express.json());
//call the routers
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// exports.api = functions.https.onRequest(app);
