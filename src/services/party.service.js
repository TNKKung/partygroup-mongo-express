const { Party } = require("../models");

const getPartyByName = async (partyName) => {
  return Party.findOne({ partyName });
};

const getParty = async () => {
  return Party.find({});
};

const createParty = async (userBody) => {
  const party = await getPartyByName(userBody.partyName);
  if (party) {
    throw new Error("There is already party");
  }
  const new_party = await Party.create(userBody);
  new_party.save();
  const join_party = await getPartyByName(userBody.partyName);
  join_party.member.push(userBody.ownerId);
  join_party.save();
  return Party.find({});
};

module.exports = {
  createParty,
  getParty,
  getPartyByName,
};
