const router = require('express').Router()
const Workout = require('../models/Workout')
const db = require('../models')

router.get("/workouts", async (req, res) => {
    Workout.aggregate([
      {
        $addFields: {totalDuration: {$sum : "$exercises.duration"}}
      }
    ])
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  });
  
  router.post("/workouts", async (req, res) => {
    Workout.create(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  });
  
  router.put("/workouts/:id", async (req, res) => {
    try{
      Workout.findOneAndUpdate(
          {
              _id: req.params.id
          },
          {
              $push:{exercises: req.body}
          }
      ).then(workout => res.json(workout))
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  
  });
  
  router.get('/workouts/range', async (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum : "$exercises.duration" }
        }
      },
      { $sort: { _id:-1 } },
      { $limit: 7 },
    ])
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  });
  
module.exports = router;