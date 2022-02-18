const express = require("express");
const validate = require("../middlewares/validate");
const partyValidation = require("../validations/party.validation");
const partyControoler = require("../controllers/party.controller");

const router = express.Router();

router.get("/getparty", partyControoler.getParty);
router.post(
  "/createparty",
  validate(partyValidation.createParty),
  partyControoler.createParty
);

module.exports = router;
