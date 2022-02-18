const httpStatus = require("http-status");
const { User, Party } = require("../models");
const ApiError = require("../utils/ApiError");

const createUser = async (userBody) => {
  if (await User.isEmailToken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  return User.create(userBody);
};
const getUserById = async (id) => {
  return User.findById(id);
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  if (updateBody.email && (await User.isEmailToken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await user.remove();
  return user;
};

const joinPartyById = async (id, personId) => {
  const party = await Party.findById(id);
  if (!party) {
    throw new ApiError(httpStatus.NOT_FOUND, "party not found");
  }
  if (party.member.length === party.memberLimit) {
    throw new ApiError(httpStatus.NOT_FOUND, "party full");
  }
  for (let i = 0; i < party.member.length; i++) {
    if (party.member[i] === personId) {
      throw new ApiError(httpStatus.NOT_FOUND, "you stay in party");
    }
  }
  party.member.push(personId);
  party.save();
  return Party;
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  joinPartyById,
};
