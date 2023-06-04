const mongoose = require("mongoose");

const TOKEN = "test";
module.exports.verfyWhatsApp = (req, res, next) => {
  console.log("req.query", req.query);
  var mode = req.query["hub.mode"];
  var challenge = req.query["hub.challenge"];
  var token = req.query["hub.verify_token"];
  if (TOKEN !== token) {
    res.status(401);
    return next("token not valid");
  }
  res.status(200).json({ "hub.challenge": challenge });
};
// module.exports.getWhatsAppMassege = (req, res, next) => {
//     product
//       .find({})
//       .populate("ownerId")
//       .populate({ path: "skills", select: "name" })
//       .then((data) => {
//         res.status(200).json(data);
//       })
//       .catch((error) => {
//         next(error);
//       });
//   };
