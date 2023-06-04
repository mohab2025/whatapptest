require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const webHook = require("./MVC/routes/webHook.route");

const db = async () => {
  // ^ this changes for Jasmine unite test
  let db = await mongoose
    .connect(
      "mongodb+srv://mohabezzet:ffrhBE4brpqHuq6K@cluster0.w7itadh.mongodb.net/"
    )
    .then(() => {
      console.log("DB Connected");
      let port = process.env.PORT || 8080;
      app.listen(port, () => {
        console.log(`Listenning to port ${port}...`);
      });
    })
    .catch((error) => console.log("Db Connection Error " + error));

  return db;
};
db();

/****** middleware *******/
//1- MW url and method
app.use(morgan("dev")); //method-url-status-ms- :res[content-length]

//2- all users CORS MW
app.use(cors());

/****************** routes *****************/
// visualPath, static folder ==> http:localhost:port/visualPath/staticFolderDirectoryOnTheServer
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //body parsing
app.use(webHook);

//3- Not Found MW
app.use((request, response) => {
  console.log("Not Found MW");
  response.status(404).json({ msg: "Not Found" });
});

//4- Error MW
app.use((error, request, response, next) => {
  console.log("Error MW");
  let errorStatus = error.status || 500;

  response.status(errorStatus).json({ msg: `${error}` });
});
