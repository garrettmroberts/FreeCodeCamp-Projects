const db = require("../models");

module.exports = {
  findAllUsers: function (req, res) {
    db.User.find({})
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  addUser: function (req, res) {
    const newUser = { "username": req.body.username, "workouts": [] };
    db.User.create(newUser)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  addWorkout: function (req, res, done) {
    let dateVar = '';
    if (req.body.date !== '') {
      dateVar = new Date(req.body.date)
    } else {
      dateVar = new Date()
    }

    let activity = {
      description: req.body.description,
      duration: parseInt(req.body.duration),
      date: dateVar
    }

    db.User.updateOne({ _id: req.body.userId }, { $push: { workouts: activity } })
      .then(() => {
        db.User.findOne({ _id: req.body.userId })
          .then(user => {
            res.json({
              "username": user.username,
              "_id": user._id,
              "description": activity.description,
              "duration": activity.duration,
              "date": activity.date.toDateString()
            });
          })
      })
      .catch(err => res.status(422).json(err));
  },

  getUserWithWorkouts: function (req, res) {
    db.User.findOne({ _id: req.query.userId })
      .then(result => {
        let workouts = result.workouts
        const fromDate = new Date(req.query.from);
        const toDate = new Date(req.query.to);
        const limit = parseInt(req.query.limit)

        if (toDate instanceof Date && !isNaN(toDate)) {
          workouts = workouts.filter(workout => workout.date >= fromDate && workout.date <= toDate);
        } else if (fromDate instanceof Date && !isNaN(fromDate)) {
          workouts = workouts.filter(workout => workout.date >= fromDate);
        };

        if (!isNaN(limit) && workouts.length > limit) {
          workouts = workouts.slice(0, limit);
        }

        let formattedResult = {
          username: result.username,
          _id: result._id,
          count: workouts.length,
          log: workouts
        }
        res.json(formattedResult);
      })
      .catch(err => res.status(422).json(err));
  }
};