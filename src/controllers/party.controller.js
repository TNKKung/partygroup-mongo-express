const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { partyService } = require("../services");
const { userService } = require("../services");

const createParty = catchAsync(async (req, res) => {
  const party = await partyService.createParty(req.body);
  res.status(httpStatus.CREATED).send({ party });
});

const getParty = catchAsync(async (req, res) => {
  const party = await partyService.getParty();
  res.status(httpStatus.CREATED).send({ party });
});

module.exports = {
  createParty,
  getParty,
};
