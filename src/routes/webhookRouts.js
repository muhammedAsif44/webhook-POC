const express = require("express");
const { receiveWebhook, getAllLeads } = require("../controllers/webhookController");

const router = express.Router();

// receive from Zoho
router.post("/", receiveWebhook);

// send to frontend
router.get("/latest", getAllLeads);

module.exports = router;
