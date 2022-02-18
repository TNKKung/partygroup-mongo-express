const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const partySchema = new mongoose.Schema({
  ownerId: { type: String, trim: true },
  partyName: { type: String, trim: true },
  member: { type: Array, trim: true },
  memberLimit: { type: String, trim: true },
});

partySchema.plugin(toJSON); //convert mongoose to JSON

partySchema.statics.isPartySchema = async function (
  partySchema,
  excludeUserId
) {
  const party = await this.findOne({ partySchema, _id: { $ne: excludeUserId } });
  return !!party;
};

const party = mongoose.model("Party", partySchema);

module.exports = party;
