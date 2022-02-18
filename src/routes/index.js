const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const partyRoute = require("./party.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/party",
    route: partyRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
