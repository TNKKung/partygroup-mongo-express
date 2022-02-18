const joi = require("joi");

const createParty = {
  body: joi.object().keys({
    ownerId: joi.string().required(),
    partyName: joi.string().required(),
    memberLimit: joi.number().required(),
  }),
};

module.exports = {
  createParty,
};
