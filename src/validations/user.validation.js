const joi = require("joi");

const createUser = {
  body: joi.object().keys({
    email: joi.string().required().email(),
    password: joi.string().required(),
  }),
};
const getUser = {
  query: joi.object().keys({
    email: joi.string(),
  }),
};

const updateUser = {
  body: joi.object().keys({
    _id: joi.string().required(),
  }),
};

const joinParty = {
  body: joi.object().keys({
    id: joi.string().required(),
    personId: joi.string().required(),
  }),
};

module.exports = {
  createUser,
  updateUser,
  getUser,
  joinParty,
};
