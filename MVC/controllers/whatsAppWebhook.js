const mongoose = require("mongoose");

const TOKEN = "mohab_whats_test";
module.exports.verfyWhatsApp = (req, res, next) => {
  var mode = req.query["hub.mode"];
  var challenge = req.query["hub.challenge"];
  var token = req.query["hub.verify_token"];
  if (TOKEN !== token) {
    res.status(401);
    return next("token not valid");
  }
  res.status(200).send(challenge);
  console.log("req.query", req.query);
};
module.exports.postWebhook = (req, res, next) => {
  console.log("jsonreq", JSON.stringify(req.body, null, 2));
  console.log("req", req.body);
};
