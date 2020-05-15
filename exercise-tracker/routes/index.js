const path = require("path");
const router = require("express").Router();
const controller = require("../controllers/api.js");

router
  .route("/api/exercise/users")
  .get(controller.findAllUsers);

router
  .route("/api/exercise/new-user")
  .post(controller.addUser);

router
  .route("/api/exercise/add")
  .post(controller.addWorkout)

router
  .route("/api/exercise/log")
  .get(controller.getUserWithWorkouts)

module.exports = router;