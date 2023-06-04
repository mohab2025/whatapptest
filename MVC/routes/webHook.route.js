const express = require("express");
const router = express.Router();

const whatsAppController = require("../controllers/whatsAppWebhook");

router
  .route("/webhooks")

  .get(whatsAppController.verfyWhatsApp);

module.exports = router;
