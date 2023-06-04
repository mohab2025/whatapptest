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
  res.status(200).send({ value: challenge });
  console.log("req.query", req.query);
};
// module.exports.getWhatsAppMassege = (req, res, next) => {s
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
