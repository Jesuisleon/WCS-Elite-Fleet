const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const router = require("./router");
// const { verifyToken } = require("../auth");
const privateRouter = require("./private.routes");

const app = express();

// use some application-level middlewares

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3001",
    optionsSuccessStatus: 200,
  })
);

// app.options("*", cors());

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API public routes
app.use("/api", router);

// API private routes
// app.use(verifyToken);
app.use("/private", privateRouter);

// Redirect all requests to the REACT app
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
